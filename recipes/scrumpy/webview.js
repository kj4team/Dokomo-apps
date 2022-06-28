module.exports = Dokomo => {
  const getMessages = () => {
    const notifications = document.querySelector(
      '.c-notifications-dropdown__count',
    );
    if (notifications) {
      Dokomo.setBadge(notifications.textContent);
    }
  };

  Dokomo.loop(getMessages);
};
