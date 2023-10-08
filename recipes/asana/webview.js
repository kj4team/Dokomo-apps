function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Dokomo => {
  const getMessages = () => {
    const hasNotification = document.querySelectorAll(
      '.SidebarTopNavLinks-notificationsButtonIndicator',
    );
    Dokomo.setBadge(hasNotification.length > 0 ? 1 : 0);
  };

  Dokomo.loop(getMessages);

  Dokomo.injectCSS(_path.default.join(__dirname, 'service.css'));
};
