module.exports = Dokomo => {
  const getMessages = () => {
    let unread = 0;
    const notificationBadge = document.querySelectorAll(
      '.NavSelectorItem-unread-badge',
    )[0];
    if (notificationBadge != undefined) {
      const innerBadge =
        notificationBadge.querySelectorAll('.BadgeV2-count')[0];
      unread = Dokomo.safeParseInt(innerBadge.textContent);
    }
    Dokomo.setBadge(unread);
  };

  Dokomo.loop(getMessages);
};
