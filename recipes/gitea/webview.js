module.exports = Dokomo => {
  const getMessages = () => {
    const directCountElement = document.querySelector('.notification_count',);
    let directCount = 0;
    if (directCountElement) {
      directCount = Dokomo.safeParseInt(directCountElement.textContent);
    }

    Dokomo.setBadge(directCount, 0);
  };

  Dokomo.loop(getMessages);
};
