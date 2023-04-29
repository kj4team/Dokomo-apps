const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Dokomo => {
  let checkIsRun = false;
  const checkHeightAction = () => {
    checkIsRun = true;
    let checkHeight = setInterval(() => {
      let menuPanel = document.querySelector('#menu-pannel');
      if (!menuPanel) {
        return;
      }
      if (menuPanel.parentElement) {
        menuPanel.parentElement.setAttribute(
          'style',
          'height:' + (window.outerHeight - 60) + 'px',
        );
      }
      clearInterval(checkHeight);
      checkIsRun = false;
    }, 1000);
  };

  checkHeightAction();

  window.addEventListener('resize', () => {
    if (!checkIsRun) {
      checkHeightAction();
    }
  });

  const getMessages = () => {
    const x = document.querySelectorAll('.unread-num em.ng-binding');
    Dokomo.setBadge(x.length > 0 ? x[0].textContent : 0);
  };

  Dokomo.loop(getMessages);

  Dokomo.injectCSS(_path.default.join(__dirname, 'style.css'));
};
