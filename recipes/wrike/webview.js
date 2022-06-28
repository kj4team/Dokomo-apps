module.exports = Dokomo => {
  const getMessages = () => {
    let directCount = 0;
    const element = document.querySelector(
      '.ws-navigation-button__indicator.ws-navigation-button-indicator',
    );
    if (element) {
      directCount = Dokomo.safeParseInt(element.textContent);
    }

    Dokomo.setBadge(directCount);
  };

  Dokomo.loop(getMessages);
};
