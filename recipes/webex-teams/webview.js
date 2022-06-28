module.exports = Dokomo => {
  const getMessages = () => {
    let count = 0;

    let span = document.querySelectorAll('.navigation-list-item--badgeCount');

    if (span.length === 0) {
      span = document.querySelectorAll(
        '.navigation-list-item--badgeCount-minimized',
      );
    }

    if (span.length > 0) {
      count = Dokomo.safeParseInt(span[0].textContent);
    }

    Dokomo.setBadge(count);
  };

  Dokomo.loop(getMessages);
};
