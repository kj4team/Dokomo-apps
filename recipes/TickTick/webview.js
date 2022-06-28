module.exports = (Dokomo) => {
  const getMessages = () => {
    // all overdue items are being counted
    const count = document.querySelectorAll('.duedate-overdue').length;

    Dokomo.setBadge(count);
  };

  Dokomo.loop(getMessages);
};
