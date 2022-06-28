module.exports = Dokomo => {
  const getMessages = () => {
    const element = document.querySelector(
      "#app button[data-test-id='notificationsCount']",
    );
    Dokomo.setBadge(element ? Dokomo.safeParseInt(element.textContent) : 0);
  };

  Dokomo.loop(getMessages);
};
