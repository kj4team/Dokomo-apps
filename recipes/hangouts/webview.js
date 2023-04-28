module.exports = Dokomo => {
  const getMessages = () => {
    // get unread messages
    let count = 0;
    for (const span of document.querySelectorAll('span[jsname=DW2nlb]'))  count += Dokomo.safeParseInt(span.textContent);

    // set Dokomo badge
    Dokomo.setBadge(count);
  };

  Dokomo.loop(getMessages);
};
