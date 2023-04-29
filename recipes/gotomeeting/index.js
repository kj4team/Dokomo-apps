module.exports = Dokomo => class Gotomeeting extends Dokomo {
  overrideUserAgent() {
    return window.navigator.userAgent.replace(/(Dokomo|Electron)\/\S+ \([^)]+\)/g, '');
  }
};
