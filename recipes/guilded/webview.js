function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Dokomo => {
  const getMessages = () => {
    let unread = 0;
    const notificationBadge = document.querySelectorAll(
      '.NavSelectorItem-unread-badge',
    )[0];
    if (notificationBadge !== undefined) {
      const innerBadge =
        notificationBadge.querySelectorAll('.BadgeV2-count')[0];
      unread = Dokomo.safeParseInt(innerBadge.textContent);
    }
    Dokomo.setBadge(unread);
  };

  Dokomo.loop(getMessages);

  Dokomo.injectCSS(_path.default.join(__dirname, 'service.css'));
};
