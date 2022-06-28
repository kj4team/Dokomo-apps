module.exports = Dokomo => {
  const getMessages = () => {
    const unreadSpan = document.querySelector(
      'span.flag-count.message-count.unread-count',
    );
    let directCount = 0;
    if (unreadSpan) {
      directCount = Dokomo.safeParseInt(unreadSpan.textContent);
    }
    Dokomo.setBadge(directCount);
  };
  Dokomo.loop(getMessages);
};
