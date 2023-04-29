module.exports = Dokomo => {
  const getMessages = () => {
    // eslint-disable-next-line no-undef
    const count = feedbin.count_data.unread_entries.length > 0 || 0;
    Dokomo.setBadge(count);
  };

  Dokomo.loop(getMessages);
};
