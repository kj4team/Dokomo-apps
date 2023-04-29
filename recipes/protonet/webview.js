module.exports = (Dokomo) => {
  const getMessages = () => {
    const unreadPrivateMessages = Dokomo.safeParseInt($('.messages .unread-meeps').text());
    const unreadGroupMessages = Dokomo.safeParseInt($('.today .unread-meeps').text());

    Dokomo.setBadge(unreadPrivateMessages + unreadGroupMessages);
  };

  Dokomo.loop(getMessages);
};
