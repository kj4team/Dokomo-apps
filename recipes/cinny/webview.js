function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Dokomo => {
  function getMessages() {
    // Number of messages from rooms which has "All Messages" notifications enabled or when mentionned in a room with "Mentions & Keyword" notifications level.
    let directCount = 0;
    // Number of messages for rooms which has "Mentions & Keyword" notifications level set which does not directly mention you.
    let indirectCount = 0;

    // Retrieves notification badges
    const badges = document.querySelectorAll('.sidebar .notification-badge');
    for (const badge of badges) {
      if (badge.childNodes.length === 0) {
        indirectCount += 1;
      } else {
        directCount += Dokomo.safeParseInt(badge.childNodes[0].textContent);
      }
    }

    // Set Dokomo badge
    Dokomo.setBadge(directCount, indirectCount);
  }
  Dokomo.loop(getMessages);

  Dokomo.injectCSS(_path.default.join(__dirname, 'service.css'));
};
