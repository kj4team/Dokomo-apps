module.exports = Dokomo => {
  const getMessages = () => {
    const totalNotifications = document.querySelectorAll('#notificationList > .notification').length;
    const hasUnread = document.querySelectorAll('#notificationsButton.hasUnread').length > 0;
    Dokomo.setBadge(hasUnread ? totalNotifications : 0);
  };

  Dokomo.loop(getMessages);
};
