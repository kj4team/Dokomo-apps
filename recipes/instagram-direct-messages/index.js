"use strict";

module.exports = Dokomo => class Messenger extends Dokomo {
  overrideUserAgent() {
    return window.navigator.userAgent.replace(/(Dokomo|Electron)(\S+\s)/g, '');
  }
};
