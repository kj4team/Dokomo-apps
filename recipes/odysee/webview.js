module.exports = (Dokomo) => {
  function getNotifications() {
      let unreadNotifications = 0;
      for (const notificationCounterElement of document.querySelectorAll(
              ".notification__count"
          )) {
          unreadNotifications =
              unreadNotifications +
              Dokomo.safeParseInt(notificationCounterElement.textContent);
      }

      Dokomo.setBadge(unreadNotifications);
  }
  Dokomo.loop(getNotifications);
};
