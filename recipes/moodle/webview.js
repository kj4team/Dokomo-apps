module.exports = Dokomo => {
  const getMessages = () => {
    const directCountSelector = [...document.querySelectorAll('[data-region="count-container"]')];
    const totalMessageCount = directCountSelector.reduce(
      ((count, item) => count + Dokomo.safeParseInt(item.textContent)),
      0
    );

    Dokomo.setBadge(totalMessageCount, 0);
  };
  Dokomo.loop(getMessages);
};
