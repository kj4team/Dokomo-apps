const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Dokomo => {
  const getMessages = () => {
    const directSelector = document.querySelectorAll(
      '.notifications .notification-wrapper .notification[object_type="dav"]',
    );
    const direct = directSelector ? Dokomo.safeParseInt(directSelector.length) : 0;

    Dokomo.setBadge(direct);
  };

  Dokomo.loop(getMessages);

  Dokomo.injectCSS(_path.default.join(__dirname, 'service.css'));
};
