const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Dokomo => {
  const getMessages = () => {
    const count = document.querySelectorAll('.unconsumed-badge').length;

    // set Dokomo badge
    Dokomo.setBadge(count);
  };

  Dokomo.loop(getMessages);

  Dokomo.injectCSS(_path.default.join(__dirname, 'service.css'));
};
