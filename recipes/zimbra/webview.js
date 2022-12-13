module.exports = Dokomo => {
  const getMessages = () => {
    const { title } = document;
    const regex = /\d+/;
    Dokomo.setBadge(regex.test(title) ? Number(regex.exec(title)[0]) : 0);
  };

  Dokomo.loop(getMessages);
};
