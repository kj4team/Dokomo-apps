module.exports = Dokomo => {
  const getMessages = () => {
    const directMessages = document.querySelectorAll('.buffer.conversation.active.unread.activeBadge').length;
    const indirectMessages = document.querySelectorAll('.buffer.channel.active.unread').length;

    Dokomo.setBadge(directMessages, indirectMessages);
  };

  Dokomo.loop(getMessages);
};
