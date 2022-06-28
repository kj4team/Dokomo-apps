module.exports = Dokomo => {
  const getMessages = () => {
    Dokomo.setBadge(
      document.querySelector('#unread_count').textContent.replace(/\s/g, ''),
    );
  };

  Dokomo.loop(getMessages);
};
