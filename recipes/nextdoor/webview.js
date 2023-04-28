module.exports = Dokomo => {
  const getMessages = () => {
    let unread = 0;
    const notificationBadge = document.querySelectorAll(
      '.notification-badge',
    )[0];
    if (notificationBadge != undefined) {
      unread = Dokomo.safeParseInt(notificationBadge.textContent);
    }
    Dokomo.setBadge(unread);
  };

  Dokomo.loop(getMessages);
};
