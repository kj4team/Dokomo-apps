module.exports = Dokomo => class Instagram extends Dokomo {
  overrideUserAgent() {
    return window.navigator.userAgent.replace(/(Dokomo|Electron)\/\S+ \([^)]+\)/g, '').trim();
  }
};
