module.exports = Dokomo => {
  const getMessages = () => {
    const notifications = document.querySelectorAll('[class*=_3W-zkl4-bnVKzJ]');
    Dokomo.setBadge(0, notifications.length > 0 ? 1 : 0);
  };

  Dokomo.loop(getMessages);
};
