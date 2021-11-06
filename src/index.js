import { hashCode, $post } from "./utils/index";

class MonitorInstance {
  constructor({ dsn, key, Vue }) {
    this.userId = ""; // 生成规则, userAgent + 时间
    this.dsn = dsn;
    this.key = key;
    this.Vue = Vue;

    this._ERROR_STORE = [];
    this._DEVICE_INFO = {
      screen_info: {
        availHeight: screen.availHeight || "",
        availWidth: screen.availWidth || "",
        height: screen.height,
        width: screen.width,
      },
      language: navigator.language,
      userAgent: navigator.userAgent.toLocaleLowerCase(),
    };
    this.initialize();
  }

  initialize() {
    this.polyfillRequestIdleCallback();
    this.generateUserId();
    this.proxyErrorStore();
    this.collectCatchErrorFn();
  }

  // 兼容处理
  polyfillRequestIdleCallback() {
    window.requestIdleCallback =
      window.requestIdleCallback ||
      function (cb) {
        return setTimeout(() => {
          cb();
        }, 1);
      };
  }

  proxyErrorStore() {
    const orginalArrProto = Array.prototype;
    const arrayProto = Object.create(orginalArrProto);
    const methodsToPatch = ["push", "clear"];
    methodsToPatch.forEach(function (method) {
      arrayProto[method] = function () {
        if (method === "push") {
          // todo: 想做缓存的~~
          orginalArrProto[method].apply(this, arguments);
        } else if (method === "clear") {
          this.length = 0;
        }
      };
    });
    this._ERROR_STORE.__proto__ = arrayProto;
  }

  // Todo: 小程序. react. uni-app
  collectCatchErrorFn() {
    this.unhandledrejectionHandle();
    this.listenErrorHandle();
    this.vueErrorHandle();
    this.overwriteXHR();
  }

  generateUserId() {
    if (localStorage.getItem("___monitor-js-uid___")) {
      this.userId = localStorage.getItem("___monitor-js-uid___");
    } else {
      this.userId = hashCode(
        String(new Date().getTime()) + navigator.userAgent
      );
      localStorage.setItem("___monitor-js-uid___", this.userId);
    }
  }

  manualPost() {
    const self = this;
    if (self._ERROR_STORE.length) {
      $post(self.dsn + "/post", self._ERROR_STORE);
      self._ERROR_STORE.clear();
    }
  }

  clearErrorStore() {
    this._ERROR_STORE.clear();
  }

  reportError(data) {
    window.requestIdleCallback(() => {
      $post(this.dsn + "/report-err", data);
    });
  }

  // todo: 路由变化时, 上报
  // reportStrategy() {
  //   const self = this;
  //   window.addEventListener("beforeunload", function () {
  //     if (self._ERROR_STORE.length) {
  //       console.log("触发了beforeunload上报");
  //       $post(self.dsn + "/post", self._ERROR_STORE);
  //       self._ERROR_STORE.clear();
  //     }
  //   });
  // }

  generateReportData({ type, errorInfo }) {
    if (!type && !errorInfo) return;
    return {
      type,
      errorInfo,
      url: location.href,
      userId: this.userId,
      deviceInfo: this._DEVICE_INFO,
      timestamp: new Date().getTime(),
      errorId: hashCode(type + JSON.stringify(errorInfo) + location.href),
    };
  }
  /**
   * @description   全局统一处理promise的异常
   */
  unhandledrejectionHandle() {
    const self = this;
    window.addEventListener("unhandledrejection", function (e) {
      // e.preventDefault(); // 开启会阻止控制台告警
      // Safari 接口错误也会触发这里
      console.error("promise异常::", e.reason);
      const errData = self.generateReportData({
        type: "unhandledrejection",
        errorInfo: {
          error: e.reason,
        },
      });
      self.reportError(errData);
      self._ERROR_STORE.push(errData);
      return true;
    });
  }
  /**
   * @description  捕获常规的image, script, css 的加载错误
   */
  listenErrorHandle() {
    const self = this;
    window.addEventListener(
      "error",
      function (error) {
        console.error("异常::", error);
        if (error instanceof ErrorEvent) {
          let errData = self.generateReportData({
            type: "script_error",
            errorInfo: {
              colno: error.colno,
              lineno: error.lineno,
              message: error.message,
              filename: error.filename,
            },
          });
          self.reportError(errData);
          self._ERROR_STORE.push(errData);
        } else if (error.target.localName) {
          let errData = self.generateReportData({
            type: "resource_error",
            errorInfo: {
              error: error.target.outerHTML,
            },
          });
          self.reportError(errData);
          self._ERROR_STORE.push(errData);
        }
      },
      true
    );
  }
  /**
   * 捕获 Vue 抛出的错误
   */
  vueErrorHandle() {
    const self = this;
    if (this.Vue && this.Vue.config) {
      this.Vue.config.errorHandler = function (err, vm, info) {
        console.error("Vue_err::", err);
        let route = "";
        if (vm.$route) {
          route = vm.$route.path;
        }
        // console.error("Vue_info::", info);
        const errData = self.generateReportData({
          type: "vue_error",
          errorInfo: {
            vue_stack_err: err.stack,
            vue_info: `${err.toString()}----->${info}`,
            route,
          },
        });
        self.reportError(errData);
        self._ERROR_STORE.push(errData);
      };
    }
  }

  // 重写xhr
  overwriteXHR() {
    if (!"XMLHttpRequest" in window) return;
    const self = this;
    const _xmlReqProto = window.XMLHttpRequest.prototype;

    const _xhrOpen = _xmlReqProto["open"];
    const _newOpen = function () {
      this._httpInfo = {
        method: arguments[0],
        startTime: Date.now(),
      };
      _xhrOpen.apply(this, arguments);
    };
    _xmlReqProto["open"] = _newOpen;

    const _xhrSend = _xmlReqProto["send"];
    const _newSend = this.replaceOriginalFn(_xhrSend, "loadend", function () {
      if (this.readyState === 4) {
        if (this.status >= 400) {
          console.log("接口响应粗错了", this);
          const isJSON = /'application\/json'/.test(
            this.getResponseHeader("content-type")
          );
          const errData = self.generateReportData({
            type: "request_error",
            errorInfo: {
              status: this.status,
              response: isJSON ? JSON.parse(this.response) : this.response,
              responseURL: this.responseURL,
              requestMethod: this._httpInfo.method,
              spendTime: Date.now() - this._httpInfo.startTime,
            },
          });
          self.reportError(errData);
          self._ERROR_STORE.push(errData);
        }
      }
    });
    _xmlReqProto["send"] = _newSend;
  }

  replaceOriginalFn(original, reName, reFn) {
    return function (...args) {
      this.addEventListener(reName, reFn);
      original.apply(this, args);
    };
  }
}

class TinyMonitorSdk {
  constructor() {
    this.monitorInstance = null;
  }
  static init({ dsn, key, Vue }) {
    if (!dsn || !key) return;
    this.monitorInstance = new MonitorInstance({ dsn, key, Vue });
  }
  static instance() {
    return this.monitorInstance;
  }
  static errorStore() {
    return this.monitorInstance._ERROR_STORE;
  }
  static manualPost() {
    this.monitorInstance.manualPost();
  }
  static clearErrorStore() {
    this.monitorInstance.clearErrorStore();
  }
}

export default TinyMonitorSdk;
