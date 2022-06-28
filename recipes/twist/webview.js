module.exports = Dokomo => {
  const getMessages = () => {
    const count = document.querySelectorAll('.switch_pane>.unread').length;
    Dokomo.setBadge(count);
  };

  Dokomo.loop(getMessages);
};
