module.exports = (Dokomo) => {
  const getMessages = () => {
    let direct = 0;
    let indirect = 0;
    Dokomo.setBadge(direct, indirect);
  }

  Dokomo.loop(getMessages);
}
