function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Dokomo => {
  const getMessages = () => {
    // get unread messages
    let count = 0;
    for (const span of document.querySelectorAll('span[jsname=DW2nlb]'))
      count += Dokomo.safeParseInt(span.textContent);

    // set Dokomo badge
    Dokomo.setBadge(count);
  };

  Dokomo.loop(getMessages);

  Dokomo.injectCSS(_path.default.join(__dirname, 'service.css'));
};
