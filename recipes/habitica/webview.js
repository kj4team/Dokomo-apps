module.exports = Dokomo => {
  const getMessages = () => {
    let count = 0;
    const element = document.querySelector('.message-count');
    if (element) {
      count = Dokomo.safeParseInt(element.textContent);
    }
    Dokomo.setBadge(count);
  };

  Dokomo.loop(getMessages);
};
