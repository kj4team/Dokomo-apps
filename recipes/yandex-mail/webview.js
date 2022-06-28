module.exports = Dokomo => {
  const getMessages = () => {
    let count = 0;

    if (document.querySelectorAll('.mail-LabelList-Item_count').length > 1) {
      count = Dokomo.safeParseInt(document.querySelectorAll('.mail-LabelList-Item_count')[1].textContent);
    }

    Dokomo.setBadge(count);
  };

  Dokomo.loop(getMessages);
};
