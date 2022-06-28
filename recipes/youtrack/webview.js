module.exports = Dokomo => {
  const getMessages = () => {
    const unread = document.querySelectorAll('.header__bell-wrapper_unread');
    Dokomo.setBadge(unread.length > 0 ? 1 : 0);
  };

  Dokomo.loop(getMessages);
};
