const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Dokomo => {
  const getMessages = () => {
    const element = document.querySelector('a[href^="/direct/inbox"]');
    Dokomo.setBadge(element ? Dokomo.safeParseInt(element.textContent) : 0);
  };

  Dokomo.loop(getMessages);

  // Helper that activates DarkReader and injects your darkmode.css at the same time
  Dokomo.handleDarkMode((isEnabled) => {

    var url = new URL(window.location.href);
    var searchParams = url.searchParams;
    var isDarkModeParam = searchParams.get('theme');
    var changedParams = false;

    if (isEnabled) {
      isDarkModeParam ? null :
        (
          searchParams.set('theme', 'dark'),
          changedParams = true
        );
    } else {
      isDarkModeParam ?
        (
          searchParams.delete('theme', 'dark'),
          changedParams = true
        )
      : null;
    }

    changedParams ?
      (
        url.search = searchParams.toString(),
        window.location.href = url.toString()
      )
    : null;

  });

  Dokomo.injectCSS(_path.default.join(__dirname, 'service.css'));
};
