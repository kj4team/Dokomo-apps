module.exports = Dokomo => {
  const getMessages = () => {
    const allMessages = Dokomo.safeParseInt(document.querySelector('.team-counter').textContent);
    Dokomo.setBadge(allMessages);
  };
  Dokomo.loop(getMessages);
};
