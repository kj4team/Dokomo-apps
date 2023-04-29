module.exports = (Dokomo) => {
  const getMessages = () => {
    const count = document.querySelector('a[data-test-folder-name="Inbox"]').getAttribute('data-test-unread-count');
    Dokomo.setBadge(count);
  };

  Dokomo.loop(getMessages);
};
