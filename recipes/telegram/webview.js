const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Dokomo => {
  const telegramVersion = document
    .querySelector('meta[name="application-name"]')
    ?.getAttribute('content');

  const isWebK = telegramVersion?.includes('WebK');

  // There are two different Telegram versions for internal competition
  // Read more: https://bugs.telegram.org/c/4002/public
  const webZCount = () => {
    let directCount = 0;
    let groupCount = 0;

    const directCountSelector = document.querySelectorAll(
      '.chat-list .ListItem.private .Badge.unread:not(.muted)',
    );
    const groupCountSelector = document.querySelectorAll(
      '.chat-list .ListItem.group .Badge.unread:not(.muted)',
    );

    for (const badge of directCountSelector) {
      directCount += Dokomo.safeParseInt(badge.textContent);
    }

    for (const badge of groupCountSelector) {
      groupCount += Dokomo.safeParseInt(badge.textContent);
    }

    Dokomo.setBadge(directCount, groupCount);
  };

  const webKCount = () => {
    let directCount = 0;
    let groupCount = 0;

    const elements = document.querySelectorAll('.rp:not(.is-muted)');

    for (const element of elements) {
      const subtitleBadge = element.querySelector('.dialog-subtitle-badge');

      if (subtitleBadge) {
        const parsedValue = Dokomo.safeParseInt(subtitleBadge.textContent);

        if (element.dataset.peerId > 0) {
          directCount += parsedValue;
        } else {
          groupCount += parsedValue;
        }
      }
    }

    Dokomo.setBadge(directCount, groupCount);
  };

  const getMessages = () => {
    if (isWebK) {
      webKCount();
    } else {
      webZCount();
    }
  };

  const getActiveDialogTitle = () => {
    let element;

    element = isWebK ? document.querySelector('.top .peer-title') : document.querySelector('.chat-list .ListItem .title > h3');

    Dokomo.setDialogTitle(element ? element.textContent : '');
  };

  const loopFunc = () => {
    getMessages();
    getActiveDialogTitle();
  };

  Dokomo.loop(loopFunc);

  Dokomo.injectCSS(_path.default.join(__dirname, 'service.css'));
};
