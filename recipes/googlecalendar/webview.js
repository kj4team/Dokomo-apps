const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Dokomo => {
  // if the user is on googlecalendar landing page, go to the login page.
  if (
    location.hostname == 'workspace.google.com' &&
    location.href.includes('products/calendar/')
  ) {
    location.href =
      'https://accounts.google.com/AccountChooser?continue=https://calendar.google.com/u/0/';
  }
  Dokomo.injectCSS(_path.default.join(__dirname, 'calendar.css'));
  Dokomo.injectJSUnsafe(_path.default.join(__dirname, 'webview-unsafe.js'));
};
