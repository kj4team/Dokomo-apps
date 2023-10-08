function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Dokomo => {
  const UNREAD_BADGE_SELECTOR = '.navigation-item--badgeCount';

  const getMessages = () => {
    let directCount = 0;
    let indirectCount = 0;

    const elements = document.querySelectorAll(
      '.navigation-bar-list .listItemWrapper',
    );
    if (
      elements.length > 0 &&
      elements[1].querySelector(UNREAD_BADGE_SELECTOR)
    ) {
      directCount = Dokomo.safeParseInt(
        elements[1].querySelector(UNREAD_BADGE_SELECTOR).textContent,
      );
    }
    if (
      elements.length > 1 &&
      elements[2].querySelector(UNREAD_BADGE_SELECTOR)
    ) {
      indirectCount = Dokomo.safeParseInt(
        elements[2].querySelector(UNREAD_BADGE_SELECTOR).textContent,
      );
    }

    Dokomo.setBadge(directCount, indirectCount);
  };

  Dokomo.loop(getMessages);

  Dokomo.injectCSS(_path.default.join(__dirname, 'service.css'));
};
