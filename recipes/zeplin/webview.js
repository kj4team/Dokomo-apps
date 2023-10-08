function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Dokomo => {
  const getMessages = () => {
    const totalNotifications = document.querySelectorAll(
      '#notificationList > .notification',
    ).length;
    const hasUnread =
      document.querySelectorAll('#notificationsButton.hasUnread').length > 0;
    Dokomo.setBadge(hasUnread ? totalNotifications : 0);
  };

  Dokomo.loop(getMessages);

  Dokomo.injectCSS(_path.default.join(__dirname, 'service.css'));
};
