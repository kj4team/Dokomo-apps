module.exports = Dokomo => {
  function parseQuery(query) {
    const el = document.querySelector(query);
    return el && Dokomo.safeParseInt(el.textContent);
  }

  const getMessages = () => {
    const el = document.querySelector('.msgCount');
    let count;

    if (el && el.textContent) {
      count = Dokomo.safeParseInt(el.textContent.replace(/[ ()]/gi, ''));
    } else {
      const count_messages = parseQuery(
        'gv-nav-tab[tooltip="Messages"] div[aria-label="Unread count"]',
      );
      const count_calls = parseQuery(
        'gv-nav-tab[tooltip="Calls"] div[aria-label="Unread count"]',
      );
      const count_voicemails = parseQuery(
        'gv-nav-tab[tooltip="Voicemail"] div[aria-label="Unread count"]',
      );
      count = count_messages + count_calls + count_voicemails;
    }

    Dokomo.setBadge(count);
  };

  Dokomo.loop(getMessages);
};
