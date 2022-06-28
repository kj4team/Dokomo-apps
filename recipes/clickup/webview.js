module.exports = Dokomo => {
  const getMessages = () => {
    const unread = document.querySelector('.cu-notification-alert__dot');
    Dokomo.setBadge(unread ? 1 : 0);
  };

  Dokomo.loop(getMessages);
};
