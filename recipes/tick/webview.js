const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Dokomo => {
  // TODO: not sure what "notify" would be useful for this app

  Dokomo.injectCSS(_path.default.join(__dirname, 'service.css'));
};
