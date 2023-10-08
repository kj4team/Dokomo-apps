function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Dokomo => {
  const getMessages = () => {
    // get unread messages
    const count = document.querySelectorAll('.guilds-wrapper .badge').length;

    // set Dokomo badge
    Dokomo.setBadge(count);
  };

  Dokomo.loop(getMessages);

  // Hide download message
  Dokomo.injectCSS(_path.default.join(__dirname, 'service.css'));
};
