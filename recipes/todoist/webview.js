module.exports = Dokomo => {
  function getTasks() {
    let todayCount = 0;
    let inboxCount = 0;
    const todayElement = document.querySelector('#filter_today .item_counter');
    const inboxElement = document.querySelector('#filter_inbox .item_counter');

    if (todayElement) {
      todayCount = Dokomo.safeParseInt(todayElement.textContent);
    }

    if (inboxElement) {
      inboxCount = Dokomo.safeParseInt(inboxElement.textContent);
    }

    Dokomo.setBadge(inboxCount, todayCount);
  }

  Dokomo.loop(getTasks);
};
