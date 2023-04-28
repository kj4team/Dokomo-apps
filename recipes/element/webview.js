module.exports = Dokomo => {
  function getMessages() {
    const matches = document.querySelector('title').textContent
      .match('(?<=\\[)\\d+(?=])');
    const directCount = Dokomo.safeParseInt(matches !== null ? matches[0] : 0);
    const indirectCount = document.querySelector('.mx_SpaceTreeLevel')
      .querySelectorAll('.mx_NotificationBadge_dot')
      .length;
    Dokomo.setBadge(directCount, indirectCount);
  }

  Dokomo.loop(getMessages);
};
