function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

setTimeout(() => {
  const elem = document.querySelector('.landing-title.version-title');
  if (
    elem &&
    elem.textContent &&
    elem.textContent.toLowerCase().includes('google chrome')
  ) {
    window.location.reload();
  }
}, 1000);

module.exports = (Dokomo, settings) => {
  const getMessages = () => {
    const elements = document.querySelectorAll('.CxUIE, .unread, ._0LqQ');
    let count = 0;
    for (const element of elements) {
      if (
        element.querySelectorAll('.P6z4j').length === 1 &&
        element.querySelectorAll('*[data-icon="muted"]').length === 0
      ) {
        count += 1;
      }
    }

    Dokomo.setBadge(count);
  };

  window.addEventListener('beforeunload', async () => {
    Dokomo.clearStorageData(settings.id, {
      storages: [
        'appcache',
        'serviceworkers',
        'cachestorage',
        'websql',
        'indexdb',
      ],
    });
    Dokomo.releaseServiceWorkers();
  });

  Dokomo.loop(getMessages);

  Dokomo.injectCSS(_path.default.join(__dirname, 'service.css'));
};
