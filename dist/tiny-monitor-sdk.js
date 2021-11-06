(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.object.to-string.js'), require('core-js/modules/es.regexp.to-string.js')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.concat.js', 'core-js/modules/es.object.to-string.js', 'core-js/modules/es.regexp.to-string.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.TinyMonitorSdk = factory());
})(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function toStrFn(item) {
    if (item === null) {
      return "NULL";
    } else if (item === undefined) {
      return "UNDEFINED";
    } else if (typeof item === "string" || item instanceof String) {
      return "".concat(item);
    }

    return item.toString();
  }
  function hashCode(key) {
    var tableKey = toStrFn(key);
    if (!tableKey) return 0;
    var hash = 0,
        i,
        chr,
        result;
    if (tableKey.length === 0) return hash;

    for (i = 0; i < tableKey.length; i++) {
      chr = tableKey.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }

    if (hash < 0) {
      result = "n" + Math.abs(hash);
    } else {
      result = "p" + hash;
    }

    return result;
  }
  function $post(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    try {
      if (navigator.sendBeacon && typeof navigator.sendBeacon === "function") {
        navigator.sendBeacon(url, JSON.stringify(data));
      } else {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("content-type", "application/json");
        xhr.withCredentials = true;
        xhr.send(JSON.stringify(data));
      }
    } catch (error) {
      console.log("post err");
    }
  }

  var MonitorInstance = /*#__PURE__*/function () {
    function MonitorInstance(_ref) {
      var dsn = _ref.dsn,
          key = _ref.key,
          Vue = _ref.Vue;

      _classCallCheck(this, MonitorInstance);

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
          width: screen.width
        },
        language: navigator.language,
        userAgent: navigator.userAgent.toLocaleLowerCase()
      };
      this.initialize();
    }

    _createClass(MonitorInstance, [{
      key: "initialize",
      value: function initialize() {
        this.polyfillRequestIdleCallback();
        this.generateUserId();
        this.proxyErrorStore();
        this.collectCatchErrorFn();
      } // 兼容处理

    }, {
      key: "polyfillRequestIdleCallback",
      value: function polyfillRequestIdleCallback() {
        window.requestIdleCallback = window.requestIdleCallback || function (cb) {
          return setTimeout(function () {
            cb();
          }, 1);
        };
      }
    }, {
      key: "proxyErrorStore",
      value: function proxyErrorStore() {
        var orginalArrProto = Array.prototype;
        var arrayProto = Object.create(orginalArrProto);
        var methodsToPatch = ["push", "clear"];
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
      } // Todo: 小程序. react. uni-app

    }, {
      key: "collectCatchErrorFn",
      value: function collectCatchErrorFn() {
        this.unhandledrejectionHandle();
        this.listenErrorHandle();
        this.vueErrorHandle();
        this.overwriteXHR();
      }
    }, {
      key: "generateUserId",
      value: function generateUserId() {
        if (localStorage.getItem("___monitor-js-uid___")) {
          this.userId = localStorage.getItem("___monitor-js-uid___");
        } else {
          this.userId = hashCode(String(new Date().getTime()) + navigator.userAgent);
          localStorage.setItem("___monitor-js-uid___", this.userId);
        }
      }
    }, {
      key: "manualPost",
      value: function manualPost() {
        var self = this;

        if (self._ERROR_STORE.length) {
          $post(self.dsn + "/post", self._ERROR_STORE);

          self._ERROR_STORE.clear();
        }
      }
    }, {
      key: "clearErrorStore",
      value: function clearErrorStore() {
        this._ERROR_STORE.clear();
      }
    }, {
      key: "reportError",
      value: function reportError(data) {
        var _this = this;

        window.requestIdleCallback(function () {
          $post(_this.dsn + "/report-err", data);
        });
      } // todo: 路由变化时, 上报
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

    }, {
      key: "generateReportData",
      value: function generateReportData(_ref2) {
        var type = _ref2.type,
            errorInfo = _ref2.errorInfo;
        if (!type && !errorInfo) return;
        return {
          type: type,
          errorInfo: errorInfo,
          url: location.href,
          userId: this.userId,
          deviceInfo: this._DEVICE_INFO,
          timestamp: new Date().getTime(),
          errorId: hashCode(type + JSON.stringify(errorInfo) + location.href)
        };
      }
      /**
       * @description   全局统一处理promise的异常
       */

    }, {
      key: "unhandledrejectionHandle",
      value: function unhandledrejectionHandle() {
        var self = this;
        window.addEventListener("unhandledrejection", function (e) {
          // e.preventDefault(); // 开启会阻止控制台告警
          // Safari 接口错误也会触发这里
          console.error("promise异常::", e.reason);
          var errData = self.generateReportData({
            type: "unhandledrejection",
            errorInfo: {
              error: e.reason
            }
          });
          self.reportError(errData);

          self._ERROR_STORE.push(errData);

          return true;
        });
      }
      /**
       * @description  捕获常规的image, script, css 的加载错误
       */

    }, {
      key: "listenErrorHandle",
      value: function listenErrorHandle() {
        var self = this;
        window.addEventListener("error", function (error) {
          console.error("异常::", error);

          if (error instanceof ErrorEvent) {
            var errData = self.generateReportData({
              type: "script_error",
              errorInfo: {
                colno: error.colno,
                lineno: error.lineno,
                message: error.message,
                filename: error.filename
              }
            });
            self.reportError(errData);

            self._ERROR_STORE.push(errData);
          } else if (error.target.localName) {
            var _errData = self.generateReportData({
              type: "resource_error",
              errorInfo: {
                error: error.target.outerHTML
              }
            });

            self.reportError(_errData);

            self._ERROR_STORE.push(_errData);
          }
        }, true);
      }
      /**
       * 捕获 Vue 抛出的错误
       */

    }, {
      key: "vueErrorHandle",
      value: function vueErrorHandle() {
        var self = this;

        if (this.Vue && this.Vue.config) {
          this.Vue.config.errorHandler = function (err, vm, info) {
            console.error("Vue_err::", err);
            var route = "";

            if (vm.$route) {
              route = vm.$route.path;
            } // console.error("Vue_info::", info);


            var errData = self.generateReportData({
              type: "vue_error",
              errorInfo: {
                vue_stack_err: err.stack,
                vue_info: "".concat(err.toString(), "----->").concat(info),
                route: route
              }
            });
            self.reportError(errData);

            self._ERROR_STORE.push(errData);
          };
        }
      } // 重写xhr

    }, {
      key: "overwriteXHR",
      value: function overwriteXHR() {
        if (!"XMLHttpRequest" in window) return;
        var self = this;
        var _xmlReqProto = window.XMLHttpRequest.prototype;
        var _xhrOpen = _xmlReqProto["open"];

        var _newOpen = function _newOpen() {
          this._httpInfo = {
            method: arguments[0],
            startTime: Date.now()
          };

          _xhrOpen.apply(this, arguments);
        };

        _xmlReqProto["open"] = _newOpen;
        var _xhrSend = _xmlReqProto["send"];

        var _newSend = this.replaceOriginalFn(_xhrSend, "loadend", function () {
          if (this.readyState === 4) {
            if (this.status >= 400) {
              console.log("接口响应粗错了", this);
              var isJSON = /'application\/json'/.test(this.getResponseHeader("content-type"));
              var errData = self.generateReportData({
                type: "request_error",
                errorInfo: {
                  status: this.status,
                  response: isJSON ? JSON.parse(this.response) : this.response,
                  responseURL: this.responseURL,
                  requestMethod: this._httpInfo.method,
                  spendTime: Date.now() - this._httpInfo.startTime
                }
              });
              self.reportError(errData);

              self._ERROR_STORE.push(errData);
            }
          }
        });

        _xmlReqProto["send"] = _newSend;
      }
    }, {
      key: "replaceOriginalFn",
      value: function replaceOriginalFn(original, reName, reFn) {
        return function () {
          this.addEventListener(reName, reFn);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          original.apply(this, args);
        };
      }
    }]);

    return MonitorInstance;
  }();

  var TinyMonitorSdk = /*#__PURE__*/function () {
    function TinyMonitorSdk() {
      _classCallCheck(this, TinyMonitorSdk);

      this.monitorInstance = null;
    }

    _createClass(TinyMonitorSdk, null, [{
      key: "init",
      value: function init(_ref3) {
        var dsn = _ref3.dsn,
            key = _ref3.key,
            Vue = _ref3.Vue;
        if (!dsn || !key) return;
        this.monitorInstance = new MonitorInstance({
          dsn: dsn,
          key: key,
          Vue: Vue
        });
      }
    }, {
      key: "instance",
      value: function instance() {
        return this.monitorInstance;
      }
    }, {
      key: "errorStore",
      value: function errorStore() {
        return this.monitorInstance._ERROR_STORE;
      }
    }, {
      key: "manualPost",
      value: function manualPost() {
        this.monitorInstance.manualPost();
      }
    }, {
      key: "clearErrorStore",
      value: function clearErrorStore() {
        this.monitorInstance.clearErrorStore();
      }
    }]);

    return TinyMonitorSdk;
  }();

  return TinyMonitorSdk;

}));
