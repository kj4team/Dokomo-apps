const NOTIFICATION_BADGE_CLASS = '.badge-round';

module.exports = Dokomo => {
  const getMessages = () => {
    const badges = [...document.querySelectorAll(NOTIFICATION_BADGE_CLASS)];
    const messages = badges.reduce(
      (currentValue, element) => currentValue + Number(element.textContent),
      0,
    );

    Dokomo.setBadge(messages);
  };

  Dokomo.loop(getMessages);
};
