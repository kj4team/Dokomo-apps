module.exports = Dokomo => {
  const notificationsSelector = document.querySelector(
    '[class*=header_] [class*=content_] [class*=actions_] [class*=notificationsButton_]',
  );

  const getMessages = () => {
    if (notificationsSelector) {
      Dokomo.setBadge(notificationsSelector.textContent);
    }
  };

  Dokomo.loop(getMessages);
};
