const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Dokomo => {
  const getMessages = () => {
    const updates = document.querySelectorAll('.counter')[0].textContent;
    Dokomo.setBadge(updates, 0);
  };

  Dokomo.loop(getMessages);

  Dokomo.injectCSS(_path.default.join(__dirname, 'css', 'style.css'));
};
