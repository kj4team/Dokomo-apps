module.exports = Dokomo => {
  const getMessages = () => {
    const element = document.querySelector('[href="/notifications"] > div');
    const content = window.getComputedStyle(element, ':after').getPropertyValue('content').match(/\d+/);
    const notifications = Number(content);

    Dokomo.setBadge(notifications);
  };

  Dokomo.loop(getMessages);
};
