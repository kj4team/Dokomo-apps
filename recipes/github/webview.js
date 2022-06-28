module.exports = Dokomo => {
  const getMessages = () => {
    const directCountElement = document.querySelector(
      '.filter-list.js-notification-inboxes .count',
    );
    let directCount = 0;
    if (directCountElement) {
      directCount = Dokomo.safeParseInt(directCountElement.textContent);
    }

    const indirectCountElement = document.querySelector(
      '[class*="mail-status unread"]',
    );
    let indirectCount = 0;
    if (indirectCountElement) {
      indirectCount = 1;
    }

    Dokomo.setBadge(directCount, indirectCount);
  };

  Dokomo.loop(getMessages);
};
