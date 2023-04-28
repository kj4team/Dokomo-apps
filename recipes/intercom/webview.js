module.exports = Dokomo => {
  const getMessages = () => {
    const numMessages = Dokomo.safeParseInt(
      document.querySelector(
        '.left-nav [data-content="Inbox"] .unread__container .unread',
      ).textContent,
    );
    Dokomo.setBadge(numMessages);
  };

  Dokomo.loop(getMessages);
};
