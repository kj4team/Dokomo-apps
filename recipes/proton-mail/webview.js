function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Dokomo => {
  const getMessages = () => {
    let unreadCount = 0;
    // Loop over all displayed counters and take the highest one (from the "All Mail" folder)
    for (const counterElement of document.querySelectorAll(
      '.navigation-counter-item',
    )) {
      const unreadCounter = Dokomo.safeParseInt(counterElement.textContent);
      unreadCount = Math.max(unreadCount, unreadCounter);
    }

    Dokomo.setBadge(unreadCount);
  };

  Dokomo.loop(getMessages);

  Dokomo.injectCSS(_path.default.join(__dirname, 'service.css'));
};
