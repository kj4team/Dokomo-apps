module.exports = Dokomo => {
  const getMessages = () => {
    let count = 0;
    const elem = document.querySelector('a[href="/messages"] div div');
    if (elem) {
      count = Dokomo.safeParseInt(elem.textContent);
    }

    Dokomo.setBadge(count);
  };

  Dokomo.loop(getMessages);
};
