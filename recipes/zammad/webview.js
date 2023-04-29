module.exports = Dokomo => {
  const getMessages = function getMessages() {
    const notificationsCounter = document.querySelector('.js-notificationsCounter');
    Dokomo.setBadge(Dokomo.safeParseInt(notificationsCounter.textContent));
  };

  Dokomo.loop(getMessages);
};
