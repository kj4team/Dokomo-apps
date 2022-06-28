module.exports = (Dokomo) => {
  const getMessages = () => {
    const notificationBadge = document.querySelector(
      ".siteHeader__topLevelItem--profileIcon .headerPersonalNav .modalTrigger .headerPersonalNav__icon .headerPersonalNav__flag"
    );
    let notification = notificationBadge
      ? Dokomo.safeParseInt(notificationBadge.textContent)
      : 0;

    Dokomo.setBadge(notification);
  };
  Dokomo.loop(getMessages);
};
