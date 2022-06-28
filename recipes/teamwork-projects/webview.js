module.exports = Dokomo => {
  const getMessages = () => {
    let indirectCount = 0;
    const badge = document.querySelector('#numNotifs2');

    if (badge && badge.textContent) {
      indirectCount = Dokomo.safeParseInt(badge.textContent);
    }

    Dokomo.setBadge(0, indirectCount);
  };

  Dokomo.loop(getMessages);
};
