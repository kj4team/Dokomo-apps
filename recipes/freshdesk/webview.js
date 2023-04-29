module.exports = Dokomo => {
  const getMessages = () => {
    $.get('/api/_/tickets?filter=unresolved', (data) => {
      Dokomo.setBadge(data.tickets.length);
    });
  };

  Dokomo.loop(getMessages);

/* block popups (prevents freshconnect from opening in a new window) */
  window.open = (function(url, name) {
    console.log(`blocked window.open(${url}, ${name})`);
  });
};
