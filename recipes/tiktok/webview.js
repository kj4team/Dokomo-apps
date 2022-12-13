const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Dokomo => {
  const getMessages = () => {
    const selNotifications =  document.querySelector("div.tiktok-1b4xcc5-DivHeaderInboxContainer.e18kkhh40 > sup");
    const selDM = document.querySelector("div.tiktok-1ibfxbr-DivMessageIconContainer.e1nx07zo0 > sup");

    const countNotifications = (selNotifications != null) ? Dokomo.safeParseInt(selNotifications.outerText) : 0;
    const countDM = (selDM != null) ? Dokomo.safeParseInt(selDM.outerText) : 0;

    const count = countNotifications + countDM;

    Dokomo.setBadge(count);
  };
  Dokomo.loop(getMessages);

  Dokomo.injectCSS(_path.default.join(__dirname, 'service.css'));
};
