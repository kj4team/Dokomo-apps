module.exports = Dokomo => {
  const getMessages = () => {
    // This selects the first folder (the inbox and reads its unread messages count)
    const inboxField = document.querySelector('.ws-tree-node-content')
    const inboxCountField = inboxField.querySelector('.ws-tree-node-badge');
    const inboxCountText = inboxCountField ? inboxCountField.textContent : null;
    const inboxCount = inboxCountText ? Dokomo.safeParseInt(inboxCountText) : 0;

    let unimportantCount = 0;

    if (inboxCount === 0) {
      // This selects the first folder with an unread message count.
      // The actaul count and the total of all other folders is not needed as the badge has no number.
      const totalCountField = document.querySelector('.ws-tree-node-badge');
      const totalCountText = totalCountField ? totalCountField.textContent : null;
      unimportantCount = totalCountText ? Dokomo.safeParseInt(totalCountText) : 0;
    }

    Dokomo.setBadge(inboxCount, unimportantCount);
  };

  Dokomo.loop(getMessages);
};
