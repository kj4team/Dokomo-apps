module.exports = Dokomo => {
  const getMessages = () => {
    const directCountElement = document.querySelector(
      '.filter-list.js-notification-inboxes .count',
    );
    const directCount = directCountElement
    	? Dokomo.safeParseInt(directCountElement.textContent)
    	: 0;
    const indirectCount = document.querySelector(
      '[class*="mail-status unread"]:not([hidden])',
    ) ? 1 : 0;
    Dokomo.setBadge(directCount, indirectCount);
  };

  Dokomo.loop(getMessages);
};
