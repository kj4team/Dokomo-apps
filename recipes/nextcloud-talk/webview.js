const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Dokomo => {
  const getMessages = () => {
    let direct = 0;

    const notificationWrapper = document.querySelector(
      '.notifications .notification-wrapper',
    );

    if (notificationWrapper) {
      const directSelector = notificationWrapper.querySelectorAll(
        '.notification[object_type="chat"], .notification[object_type="room"]',
      );
      direct = directSelector ? Dokomo.safeParseInt(directSelector.length) : 0;
    }

    let indirect = 0;

    for (const counter of document.querySelectorAll('.app-navigation-entry__counter')) {
      const entryCounter = Dokomo.safeParseInt(counter.textContent) : 0;
      indirect += entryCounter;
    }

    if (document.title.startsWith("*")) {
      indirect++;
    }

    Dokomo.setBadge(direct, indirect);
  };

  Dokomo.loop(getMessages);

  Dokomo.injectCSS(_path.default.join(__dirname, 'service.css'));
};
