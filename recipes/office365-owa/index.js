module.exports = Dokomo => class Outlook extends Dokomo {
  overrideUserAgent() {
    return window.navigator.userAgent.replace(/(Dokomo|Electron)\/\S+ \([^)]+\)/g, '').trim();
  }
};
