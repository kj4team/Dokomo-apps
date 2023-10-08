function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Dokomo => {
  const getMessages = () => {
    let directMessages = 0;
    let indirectMessages = 0;

    const elements = document.querySelectorAll('.counter');
    for (const element of elements) {
      directMessages += Dokomo.safeParseInt(element.textContent);
    }

    const elements2 = document.querySelectorAll('.badge');
    for (const element of elements2) {
      indirectMessages += Dokomo.safeParseInt(element.textContent);
    }

    Dokomo.setBadge(directMessages, indirectMessages);
  };

  Dokomo.loop(getMessages);

  Dokomo.injectCSS(_path.default.join(__dirname, 'service.css'));
};
