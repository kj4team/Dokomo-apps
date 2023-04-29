module.exports = Dokomo => {
  const getMessages = () => {
    const directElements = document.querySelectorAll('.unreadcount');
    let direct = 0;
    for (const directElement of directElements) {
      direct += Dokomo.safeParseInt(directElement.textContent);
    }
    Dokomo.setBadge(direct);
  };

  Dokomo.loop(getMessages);
};
