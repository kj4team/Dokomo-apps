module.exports = Dokomo => {
  const getMessages = () => {
    const elements = document.querySelectorAll('.unread');

    let count = 0;
    for (const element of elements) {
      if (
        Dokomo.safeParseInt(
          element.textContent && element.textContent.replace(/[^\d.]/g, ''),
        ) > 0
      ) {
        count++; // count 1 per channel with messages
      }
    }

    Dokomo.setBadge(count);
  };

  Dokomo.loop(getMessages);
};
