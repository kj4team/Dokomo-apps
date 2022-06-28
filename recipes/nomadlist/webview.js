module.exports = (Dokomo) => {
  const getMessages = () => {
    Dokomo.setBadge($('.unread').length);
  };

  Dokomo.loop(getMessages);
};
