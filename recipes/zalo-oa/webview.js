const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Dokomo => {
  const getMessages = () => {
    let count = 0;

    const queryList = document.querySelectorAll('#unreadConvs');
    for (const element of queryList) {
      count += Dokomo.safeParseInt(element.textContent);
    }
    Dokomo.setBadge(count);
  };
  Dokomo.loop(getMessages);

  // Dokomo.injectCSS(_path.default.join(__dirname, 'service.css'));
};
