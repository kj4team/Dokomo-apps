module.exports = Dokomo => {
  const getMessages = () => {
    let directMessages = 0;
    let indirectMessages = 0;

    const elements = document.querySelectorAll('.counter');
    for (const element of elements) {
      directMessages += Dokomo.safeParseInt(element.textContent);
    }

    const elements2 = document.querySelectorAll('.badge');
    for (const element of elements2) {
      indirectMessages += Dokomo.safeParseInt(element.textContent);
    }

    Dokomo.setBadge(directMessages, indirectMessages);
  };

  Dokomo.loop(getMessages);
};
