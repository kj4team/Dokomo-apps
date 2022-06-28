module.exports = Dokomo => {
  function getUnreadConversations() {
    Dokomo.setBadge(document.querySelector('#unread-conversations').textContent);
  }

  Dokomo.loop(getUnreadConversations);
};
