module.exports = Dokomo => {
  const getMessages = () => {
    let direct = 0;

    const np = document.querySelector('#noti_np_count');
    const re = document.querySelector('#noti_re_count');

    if (np) {
      direct += Dokomo.safeParseInt(np.textContent);
    }
    if (re) {
      direct += Dokomo.safeParseInt(re.textContent);
    }

    Dokomo.setBadge(direct);
  };

  Dokomo.loop(getMessages, 10_000);
};
