module.exports = Dokomo => {
  const getMessages = () => {
    const getNotificationButton = document.querySelector(
      '#notifications_button',
    );
    let hasNotification = getNotificationButton.classList.contains('pp-active');
    Dokomo.setBadge(0, hasNotification ? 1 : 0);
  };
  Dokomo.loop(getMessages);
};
