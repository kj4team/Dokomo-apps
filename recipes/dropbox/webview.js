module.exports = (Dokomo) => {
  const getMessages = () => {
    const hasNotifications = document.querySelector(".dig-NotificationBadge");

    Dokomo.setBadge(0, hasNotifications ? 1 : 0);
  };
  Dokomo.loop(getMessages);
};
