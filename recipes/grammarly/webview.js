function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Dokomo => {
  Dokomo.injectCSS(_path.default.join(__dirname, 'style.css'));
};
