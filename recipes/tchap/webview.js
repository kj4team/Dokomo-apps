module.exports = Dokomo => {
  const getMessages = () => {
    let count = document.querySelector('.mx_RoomSubList_badge').innerHTML
    Dokomo.setBadge(count);
  };

  Dokomo.loop(getMessages);
};
