module.exports = Dokomo => {
  const getMessages = () => {
    const count = document.querySelectorAll('.unseen-msg-count').length;
    Dokomo.setBadge(count);
  };

  Dokomo.loop(getMessages);
};
