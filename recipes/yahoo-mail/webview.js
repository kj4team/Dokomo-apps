module.exports = (Dokomo) => {
  const getMessages = () => {
    const count = document.querySelector('a[data-test-folder-name="Inbox"] span[data-test-id="displayed-count"]').textContent;
    Dokomo.setBadge(count);
  };

  Dokomo.loop(getMessages);
};
