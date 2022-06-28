module.exports = (Dokomo) => {
  const getMessages = function getMessages() {
    const unreadBadges = document.querySelectorAll("span.unread");
    const unreadBadgesArray = [...unreadBadges];
    const unreadMessagesCount = unreadBadgesArray.reduce(
      (previousValue, currentBadge) =>
        previousValue + Dokomo.safeParseInt(currentBadge.textContent),
      0,
    );
    Dokomo.setBadge(unreadMessagesCount);
  };

  Dokomo.loop(getMessages);
};
