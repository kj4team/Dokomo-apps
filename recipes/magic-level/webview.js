const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Dokomo => {

  const getMessages = () => {
    let countImportant = 0;
    let countNonImportant = 0;
    const inboxLinks = document.querySelectorAll('.J-Ke.n0');
    if (inboxLinks.length > 0) {
      let parentNode = inboxLinks[0].parentNode;
      if (parentNode) {
        let parentNodeOfParentNode = parentNode.parentNode;
        if (parentNodeOfParentNode) {
          const unreadCounts = parentNodeOfParentNode.querySelectorAll('.bsU');
          if (unreadCounts.length > 0) {
            let unreadCount = unreadCounts[0].textContent;
            if (unreadCount.includes(':')) {
              let counts = unreadCount
                .split(':')
                .map(s => Dokomo.safeParseInt(s.replace(/[^\p{N}]/gu, '')));
              countImportant = counts[0];
              countNonImportant = counts[1] - counts[0];
            } else {
              countImportant = Dokomo.safeParseInt(
                unreadCount.replace(/[^\p{N}]/gu, ''),
              );
            }
          }
        }
      }
    }
    Dokomo.setBadge(countImportant, countNonImportant);
  };

  Dokomo.loop(getMessages);

  Dokomo.injectCSS(_path.default.join(__dirname, 'service.css'));
};
