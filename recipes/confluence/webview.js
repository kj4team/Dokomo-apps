module.exports = Dokomo => {
  const getMessages = () => {
    const unreadMessageCountElement = document.querySelector('#notifications-anchor .badge');
    const unreadMessagesCount = Dokomo.safeParseInt(unreadMessageCountElement.textContent);
    Dokomo.setBadge(unreadMessagesCount, 0);
  };
  Dokomo.loop(getMessages);
};
