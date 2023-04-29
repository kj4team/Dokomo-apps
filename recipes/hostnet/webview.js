module.exports = Dokomo => {
  const getMessages = () => {
    Dokomo.setBadge(Dokomo.safeParseInt(document.querySelectorAll('.badge.topbar-launcherbadge')[0].firstChild.data));
  };

  Dokomo.loop(getMessages);
};
