module.exports = Dokomo => {
  // Tweetdeck redirect fix
  Dokomo.ipcRenderer.on('redirect-url', (event, url) => {
    window.location.assign(url);
  });

  const getMessages = () => {
    const elements = document.querySelectorAll('.msg-unread-count');
    let count = 0;
    if (elements[0]) {
      count = Dokomo.safeParseInt(elements[0].textContent);
    }

    Dokomo.setBadge(count);
  };

  Dokomo.loop(getMessages);
};
