module.exports = Dokomo => {
  const getMessages = () => {
    let direct = 0;

    const MessageElement = document.querySelector(
      '[id=global_nav_conversations_link]',
    );
    if (MessageElement) {
      direct += Dokomo.safeParseInt(MessageElement.textContent);
    }

    Dokomo.setBadge(direct);
  };

  Dokomo.loop(getMessages);
};
