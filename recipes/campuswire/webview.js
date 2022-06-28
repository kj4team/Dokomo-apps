module.exports = Dokomo => {
  const getMessages = () => {
    let count = document.querySelectorAll(
      '._5fx8:not(._569x),._1ht3:not(._569x)',
    ).length;
    const messageRequestsElement = document.querySelector('._5nxf');

    if (messageRequestsElement) {
      count += Dokomo.safeParseInt(messageRequestsElement.textContent);
    }

    Dokomo.setBadge(count);
  };

  Dokomo.loop(getMessages);

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
          ((notification.title.props || {}).content || [])[0] || 'Campuswire';
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
