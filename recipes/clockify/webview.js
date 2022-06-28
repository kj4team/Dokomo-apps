module.exports = Dokomo => {
  const getMessages = () => {
    const notifications = document.querySelectorAll('.notification--number');
    Dokomo.setBadge(0, notifications.length > 0 ? 1 : 0);
  };

  Dokomo.loop(getMessages);
};
