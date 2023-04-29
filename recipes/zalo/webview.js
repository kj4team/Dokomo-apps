module.exports = Dokomo => {
  const getMessages = () => {
    const notificationBadge = document.querySelectorAll('.tab-red-dot').length;
    Dokomo.setBadge(notificationBadge);
  };

  Dokomo.loop(getMessages);
};
