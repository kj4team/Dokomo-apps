module.exports = Dokomo => {
  const getMessages = () => {
    const elements = document.querySelectorAll('.contact-list__message__unread-badge-counter');
    let count = 0;
    for (const element of elements) {
      count += Dokomo.safeParseInt(element.textContent);
    }
    Dokomo.setBadge(count, 0);
  };

  Dokomo.loop(getMessages);
};
