const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Dokomo => {
  // TODO: If your Facebook Meta service has unread messages, uncomment these lines to implement the logic for updating the badges
  // const getMessages = () => {
  //   // TODO: Insert your notification-finding code here
  //   Dokomo.setBadge(0, 0);
  // };
  // Dokomo.loop(getMessages);

  Dokomo.injectCSS(_path.default.join(__dirname, 'service.css'));
};
