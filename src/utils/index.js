export function getCurrentUrl() {
  return window.location.href;
}

export function toStrFn(item) {
  if (item === null) {
    return "NULL";
  } else if (item === undefined) {
    return "UNDEFINED";
  } else if (typeof item === "string" || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}

export function hashCode(key) {
  const tableKey = toStrFn(key);
  if (!tableKey) return 0;
  let hash = 0,
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

export function $post(url, data = {}) {
  try {
    if (navigator.sendBeacon && typeof navigator.sendBeacon === "function") {
      navigator.sendBeacon(url, JSON.stringify(data));
    } else {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", url);
      xhr.setRequestHeader("content-type", "application/json");
      xhr.withCredentials = true;
      xhr.send(JSON.stringify(data));
    }
  } catch (error) {
    console.log("post err");
  }
}

export function isType(target, type) {
  return Object.prototype.toString.call(target).slice(8, -1) === type;
}
