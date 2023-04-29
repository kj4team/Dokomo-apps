module.exports = Dokomo => {
  const getMessages = () => {
    let indirect = document.querySelectorAll('.new-messages');
    let direct = 0;
    for (const badge of document.querySelectorAll('.people-pane .badge')) {
      direct += Dokomo.safeParseInt(badge.textContent);
    }
    Dokomo.setBadge(direct, indirect);
  };

  Dokomo.loop(getMessages);
};
