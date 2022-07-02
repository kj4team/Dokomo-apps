module.exports = Dokomo => {
  const getMessages = () => {
    let count = [...document.querySelectorAll('.bp9cbjyn.j83agx80.owycx6da:not(.btwxx1t3)')]
      .map(elem => {
        const hasPing = !!elem.querySelector('.pq6dq46d.is6700om.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.s45kfl79.emlxlaya.bkmhp75w.spb7xbtv.cyypbtt7.fwizqjfa');
        const isMuted = !!elem.querySelector('.a8c37x1j.ms05siws.l3qrxjdp.b7h9ocf4.trssfv1o');

        return hasPing && !isMuted;
      })
      .reduce((prev, curr) => prev + curr, 0);

    /*
     * add count of message requests on top of notification counter
     */
    const messageRequestsElement = document.querySelector('._5nxf');
    if (messageRequestsElement) {
      count += Dokomo.safeParseInt(messageRequestsElement.textContent);
    }

    Dokomo.setBadge(count);
  };

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const hideInstallMessage = () => {
    const installMessage = document.querySelector('.usczdcwk');
    if (installMessage.style.display != 'none') {
      installMessage.style.display = 'none'
    }
  }

  Dokomo.loop(getMessages);
  Dokomo.loop(hideInstallMessage);

  localStorage.setItem(
    '_cs_desktopNotifsEnabled',
    JSON.stringify({
      __t: Date.now(),
      __v: true,
    }),
  );

  if (typeof Dokomo.onNotify === 'function') {
    Dokomo.onNotify(notification => {
      if (typeof notification.title !== 'string') {
        notification.title =
          ((notification.title.props || {}).content || [])[0] || 'Messenger';
      }

      if (typeof notification.options.body !== 'string') {
        notification.options.body =
          (((notification.options.body || {}).props || {}).content || [])[0] ||
          '';
      }

      return notification;
    });
  }
};
