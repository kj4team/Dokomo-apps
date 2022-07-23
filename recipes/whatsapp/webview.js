const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Dokomo => {
  const getMessages = () => {
    let count = 0;
    let indirectCount = 0;

    const parentChatElem = [
      ...document.querySelectorAll('div[aria-label]'),
    ].sort((a, b) => (a.offsetHeight < b.offsetHeight ? 1 : -1))[0];
    if (!parentChatElem) {
      return;
    }

    const unreadSpans = parentChatElem.querySelectorAll('span[aria-label]');
    for (const unreadElem of unreadSpans) {
      const countValue = Dokomo.safeParseInt(unreadElem.textContent);
      if (countValue > 0) {
        if (
          !unreadElem.parentNode.previousSibling ||
          unreadElem.parentNode.previousSibling.querySelectorAll(
            '[data-icon=muted]',
          ).length === 0
        ) {
          count += countValue;
        } else {
          indirectCount += countValue;
        }
      }
    }

    Dokomo.setBadge(count, indirectCount);
  };

  Dokomo.injectJSUnsafe(_path.default.join(__dirname, 'webview-unsafe.js'));

  const getActiveDialogTitle = () => {
    const element = document.querySelector('header .emoji-texttt');

    Dokomo.setDialogTitle(element ? element.textContent : '');
  };

  const loopFunc = () => {
    getMessages();
    getActiveDialogTitle();
  };

  window.addEventListener('beforeunload', async () => {
    Dokomo.releaseServiceWorkers();
  });
  Dokomo.handleDarkMode((isEnabled) => {
    if (isEnabled) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  });

  Dokomo.loop(loopFunc);

  Dokomo.injectCSS(_path.default.join(__dirname, 'service.css'));
};
