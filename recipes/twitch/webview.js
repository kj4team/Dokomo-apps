module.exports = (Dokomo) => {
  const getMessages = () => {
    const mentions = document.querySelectorAll('.chat-line .mentioned').length;
    Dokomo.setBadge(mentions, 0);
  };

  Dokomo.loop(getMessages);
};
