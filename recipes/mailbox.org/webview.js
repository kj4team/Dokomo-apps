module.exports = (Dokomo) => {
  const getMessages = () => {
    const count = document.querySelectorAll('.new-item').length;

    Dokomo.setBadge(count);
  };

  Dokomo.loop(getMessages);
};
