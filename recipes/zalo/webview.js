module.exports = (Dokomo, settings) => {
  const getMessages = () => {
    const notificationBadge = document.querySelectorAll('.unread-red').length;
    Dokomo.setBadge(notificationBadge);
  };

  Dokomo.loop(getMessages);

  document.addEventListener('click', event => {
    const link = event.target.closest('a[content^="http"]');
    const button = event.target.closest('button[title^="http"]');

    if (link || button) {
      const url = link ? link.getAttribute('content') : button.getAttribute('title');

      if (!Dokomo.isImage(url)) {
        event.preventDefault();
        event.stopPropagation();

        if (settings.trapLinkClicks === true) {
          window.location.href = url;
        } else {
          Dokomo.openNewWindow(url);
        }
      }
    }
  }, true);
};
