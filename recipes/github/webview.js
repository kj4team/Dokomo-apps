function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Dokomo => {
  const _parseNewCount = text => {
    const match = text.match(/\d+/);
    return match ? Dokomo.safeParseInt(match[0]) : 0;
  };

  const getMessages = () => {
    const directCountElement = document.querySelector(
      '.filter-list.js-notification-inboxes .count',
    );
    let directCount = directCountElement
      ? Dokomo.safeParseInt(directCountElement.textContent)
      : 0;

    const newCountElement = document.querySelector(
      'a.h6[href="/notifications?query="]',
    );
    const newCount = newCountElement
      ? _parseNewCount(newCountElement.textContent)
      : 0;
    directCount += newCount;

    const indirectCount = document.querySelector(
      '[class*="mail-status unread"]:not([hidden])',
    )
      ? 1
      : 0;
    Dokomo.setBadge(directCount, indirectCount);
  };

  Dokomo.loop(getMessages);

  Dokomo.injectCSS(_path.default.join(__dirname, 'service.css'));
};
