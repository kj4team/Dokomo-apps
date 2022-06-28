const reload = EventType =>
  new Promise((resolve, reject) => {
    const btn = document.querySelectorAll('.giraffe-hierarchy-node-refresh')[0];
    const EventObject = document.createEvent('Events');
    EventObject.initEvent(EventType, true, false);

    if (btn.dispatchEvent(EventObject)) {
      resolve();
    } else {
      reject();
    }
  });

module.exports = Dokomo => {
  const getUnread = () => {
    const nodes = document.querySelectorAll('.giraffe-hierarchy-node-counter');
    let counter = 0;

    for (const node of nodes) {
      counter += Dokomo.safeParseInt(node.textContent);
    }

    Dokomo.setBadge(counter);
  };

  if (!window.location.pathname.includes('auth')) {
    Dokomo.loop(getUnread);

    window.setInterval(() => {
      reload('click');
    }, 60_000);
  }
};
