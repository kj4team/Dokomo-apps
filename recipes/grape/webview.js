module.exports = Dokomo => {
  const getMessages = () => {
    const directMessages = document.querySelectorAll('.c0120').length;
    const indirectMessages = document.querySelectorAll('.c0121').length;

    Dokomo.setBadge(directMessages, indirectMessages);
  };

  Dokomo.loop(getMessages);
};
