module.exports = Dokomo => {
  const getMessages = () => {
    // Count number of conversations or teams with unread messages
    const count = document.querySelectorAll('.unread-count').length;
    Dokomo.setBadge(count, 0);
  };

  Dokomo.loop(getMessages);
};
