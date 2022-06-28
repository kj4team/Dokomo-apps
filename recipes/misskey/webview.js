module.exports = Dokomo => {
  const getMessages = () => {
    // check notification badge for Dokomo badge
    let hasNotification = !!document.querySelector(
      '#app div.notifications > button > i.circle',
    );
    Dokomo.setBadge(0, hasNotification ? 1 : 0);
  };

  Dokomo.loop(getMessages);
};
