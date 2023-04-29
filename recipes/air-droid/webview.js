module.exports = (Dokomo) => {
  const getMessages = () => {
    const count = {};
    const data = document.querySelector('#FranzMessages').dataset;
    if (data) {
      count.count = data.direct;
      count.count_indirect = data.indirect;
    }

    Dokomo.setBadge(count);
  }

  Dokomo.loop(getMessages);
};
