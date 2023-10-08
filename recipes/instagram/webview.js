function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Dokomo => {
  const getMessages = () => {
    const element = document.querySelector('a[href^="/direct/inbox"]');
    Dokomo.setBadge(
      element.textContent ? Dokomo.safeParseInt(element.textContent) : 0,
    );
  };

  Dokomo.loop(getMessages);

  // https://github.com/kj4team/dokomo-recipes/blob/9d715597a600710c20f75412d3dcd8cdb7b3c39e/docs/frontend_api.md#usage-4
  // Helper that activates DarkReader and injects your darkmode.css at the same time
  Dokomo.handleDarkMode(isEnabled => {
    const url = new URL(window.location.href);
    const { searchParams } = url;
    const isDarkModeParam = searchParams.get('theme');
    let changedParams = false;

    if (isEnabled) {
      isDarkModeParam
        ? null
        : (searchParams.set('theme', 'dark'), (changedParams = true));
    } else {
      isDarkModeParam
        ? (searchParams.delete('theme', 'dark'), (changedParams = true))
      : null;
    }

    changedParams
      ? ((url.search = searchParams.toString()),
        (window.location.href = url.toString()))
    : null;
  });

  Dokomo.injectCSS(_path.default.join(__dirname, 'service.css'));
};
