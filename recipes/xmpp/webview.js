function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Dokomo => {
  function getMessages() {
    let direct = 0;
    for (const indicator of document.querySelectorAll('.msgs-indicator')) {
      direct += Dokomo.safeParseInt(indicator.textContent);
    }

    direct /= 2; // as the messages are provided in 2 different locations..
    Dokomo.setBadge(direct);
  }

  Dokomo.loop(getMessages);

  Dokomo.injectCSS(_path.default.join(__dirname, 'service.css'));
};
