module.exports = (Dokomo) => {
  function getMessages() {
    let direct = 0;
    for (const indicator of document.querySelectorAll('.msgs-indicator')) {
      direct += Dokomo.safeParseInt(indicator.textContent)
    }

    direct = direct / 2 // as the messages are provided in 2 different locations..
    Dokomo.setBadge(direct);
  }

  Dokomo.loop(getMessages);
};
