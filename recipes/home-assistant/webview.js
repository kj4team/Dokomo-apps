module.exports = Dokomo => {
  const getMessages = () => {
    const badges = document.querySelector("home-assistant").shadowRoot.querySelector("home-assistant-main").shadowRoot.querySelector("ha-sidebar").shadowRoot.querySelectorAll(".notification-badge");
    if (badges.length > 0) {
      var count = Dokomo.safeParseInt(badges[0].textContent.replace(/[^\p{N}]/gu, ''));
      Dokomo.setBadge(count)
    } else {
      Dokomo.setBadge(0)
    }
  };
  Dokomo.loop(getMessages);
};
