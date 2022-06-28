module.exports = Dokomo => {
  const getMessages = () => {
    const direct = document.querySelectorAll(
      '.notifications .notification-container .notification-wrapper li .notification',
    ).length;

    Dokomo.setBadge(direct);
  };

  Dokomo.loop(getMessages);
};
