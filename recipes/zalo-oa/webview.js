function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Dokomo => {
  const getMessages = () => {
    const notificationBadge = document.querySelectorAll('.tab-red-dot').length;
    Dokomo.setBadge(notificationBadge);
  };

  Dokomo.loop(getMessages);
};
