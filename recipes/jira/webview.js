module.exports = Dokomo => {
  const getMessages = () => {
    // get unread messages
    const element = document.querySelector(
      '#atlassian-navigation-notification-count span',
    );
    Dokomo.setBadge(element ? element.textContent : 0);
  };

  Dokomo.loop(getMessages);
};
