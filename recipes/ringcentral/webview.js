module.exports = Dokomo => {
  const getMessages = () => {
    let directCount = 0;
    let indirectCount = 0;

    const messageCountElement = document.querySelector('#Message-umi');
    if (messageCountElement) {
      directCount = Dokomo.safeParseInt(messageCountElement.textContent);
    }

    const unreadChats = document.querySelectorAll('.has-unread');
    // unreadChats includes direct messages - do not count them
    indirectCount = unreadChats.length - directCount;

    Dokomo.setBadge(directCount, indirectCount);
  };

  Dokomo.loop(getMessages);
};
