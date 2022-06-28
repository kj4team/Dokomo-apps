module.exports = Dokomo => {
  const getMessages = () => {
    const bell = document.querySelectorAll('#view65 > span')[0];
    if (bell) {
      Dokomo.setBadge(bell.textContent);
    }
  };

  Dokomo.loop(getMessages);
};
