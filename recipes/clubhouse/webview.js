module.exports = (Dokomo) => {
  const getMessages = () => {
    const hasNotifications = document.querySelector('#notifications-link .badge').classList.contains('visible');
    Dokomo.setBadge(0, hasNotifications ? 1 : 0);
  }

  Dokomo.loop(getMessages);
};
