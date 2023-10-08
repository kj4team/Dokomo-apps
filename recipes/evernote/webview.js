function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Dokomo => {
  const getMessages = () => {
    const inbox = document.querySelector(
      '.topbar-notificationsButton.has-newNotifications',
    );
    const passiveCount = inbox === null ? 0 : 1;
    Dokomo.setBadge(0, passiveCount);
  };

  Dokomo.loop(getMessages);

  Dokomo.injectCSS(_path.default.join(__dirname, 'css', 'style.css'));
};
