module.exports = Dokomo => {
  const getMessages = () => {
    const directMessages = document.querySelectorAll('.hc-mention').length;
    const allMessages = document.querySelectorAll('.aui-badge:not(.hc-mention)').length - directMessages;

    // set Dokomo badge
    Dokomo.setBadge(directMessages, allMessages);
  };

  Dokomo.loop(getMessages);
};
