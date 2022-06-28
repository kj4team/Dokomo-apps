module.exports = Dokomo => class Discord extends Dokomo {
  overrideUserAgent() {
    const useragent = window.navigator.userAgent;
    const parts = useragent.split('(KHTML, like Gecko)');

    return parts.join('(KHTML, like Gecko) discord/0.0.250').replace('Electron', 'Discord').replace('Dokomo', 'Discord');
  }
};
