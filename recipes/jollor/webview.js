const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Dokomo => {
  const getMessages = () => {
    const count = document.querySelector(
      '.user-menu-message-item-count',
    ).textContent;
    Dokomo.setBadge(count);
  };

  Dokomo.loop(getMessages);

  Dokomo.injectCSS(_path.default.join(__dirname, 'css', 'style.css'));
};
