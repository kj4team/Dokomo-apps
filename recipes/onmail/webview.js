const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Dokomo => {
  const getMessages = () => {
    let countImportant = 0;
    const inboxLinks = document.querySelectorAll('p.truncate');
    for (const label of inboxLinks){
      if (label.textContent) {
        let inbox_count = label.nextSibling
        countImportant = inbox_count == null ? 0 : Dokomo.safeParseInt(inbox_count.textContent);

        break;
      }
    }
    Dokomo.setBadge(countImportant, 0);
  };
  Dokomo.loop(getMessages);

  Dokomo.injectCSS(_path.default.join(__dirname, 'service.css'));
};
