module.exports = Dokomo => {
  const getMessages = () => {
    const direct = document.querySelector(
      '#header-menu-notifications, .notifications'
    ).querySelectorAll(
      '.notification-container .notification-wrapper .notification'
    ).length;

    Dokomo.setBadge(direct);
  };

  Dokomo.loop(getMessages);
};
