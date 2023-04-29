module.exports = (Dokomo) => {
  const getMessages = () => {
    let msgRaw = document.title.match(/\(\d*\)/);
    let messages = 0;

    if (msgRaw) {
      messages = Dokomo.safeParseInt(msgRaw[0].slice(1));
    }

    Dokomo.setBadge(messages, 0);
  }

  Dokomo.loop(getMessages);
};
