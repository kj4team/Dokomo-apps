module.exports = Dokomo => {
  const getMessages = () => {
    const title = document.querySelector('title').textContent.match(/\d+/);
    const count = title !== null ? title[0] : 0;

    Dokomo.setBadge(count);
  };

  Dokomo.loop(getMessages);
};
