function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Dokomo => {
  const getMessages = () => {
    // const notificationBadge = document.querySelectorAll('.tab-red-dot').length;
    const notificationBadge =
      document.querySelector('#unreadConvs').textContent;
    Dokomo.setBadge(notificationBadge);
  };

  Dokomo.loop(getMessages);
  Dokomo.injectCSS(_path.default.join(__dirname, 'service.css'));
};
