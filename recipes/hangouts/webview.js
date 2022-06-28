module.exports = Dokomo => {
  const getMessages = () => {
    // get unread messages
    const count = document.querySelector('#hangout-landing-chat iframe').contentWindow.document.querySelectorAll('.ee').length;

    // set Dokomo badge
    Dokomo.setBadge(count);
  };

  Dokomo.loop(getMessages);
};
