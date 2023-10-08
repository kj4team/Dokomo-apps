function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Dokomo => {
  const getMessages = () => {
    let directs = 0;
    const elements = document.querySelectorAll(
      '.nwa-msg-counter.icq-recent_state-read',
    );
    for (const element of elements) {
      if (
        Dokomo.safeParseInt(
          element.textContent && element.textContent.replaceAll(/[^\d.]/g, ''),
        ) > 0
      ) {
        directs += 1; // count 1 per channel with messages
      }
    }

    Dokomo.setBadge(directs);
  };

  Dokomo.loop(getMessages);

  Dokomo.injectCSS(_path.default.join(__dirname, 'service.css'));
};
