// const _path = _interopRequireDefault(require('path'));

// function _interopRequireDefault(obj) {
//   return obj && obj.__esModule ? obj : { default: obj };
// }

module.exports = Dokomo => {
  const getMessages = () => {
    const notificationBadge = document.querySelector('.e326xl.RaV0lX').innerHTML;
    Dokomo.setBadge(notificationBadge);
  };
  Dokomo.loop(getMessages);

  // Dokomo.injectCSS(_path.default.join(__dirname, 'service.css'));
  const path = require('path');
  Dokomo.injectJSUnsafe(path.join(__dirname, 'scripts.js'))
};
