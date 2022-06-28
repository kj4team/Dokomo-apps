const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Dokomo => {
  const getMessages = () => {
    const elements = document.querySelectorAll('.taskItem');
    let count = 0;

    for (const element of elements) {
      if (element.querySelectorAll('.completed').length === 0) {
        count += 1;
      }
    }

    // set Dokomo badge
    Dokomo.setBadge(count);
  };

  Dokomo.loop(getMessages);

  Dokomo.injectCSS(_path.default.join(__dirname, 'service.css'));
};
