function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Dokomo => {
  const getMessages = () => {
    // array-ify the list of conversations
    const allConversations = [
      ...document.querySelectorAll('#tray .tray-list .list-item'),
    ];
    // for each conversation on the list...
    const filteredConversations = allConversations.filter(e => {
      // keep it on the list if [1] it has unread messages (not .ng-hide), and [2] it isn't muted (not .overlay)
      return (
        !e.innerHTML.includes('ng-hide') && !e.innerHTML.includes('overlay')
      );
    });
    const unreadConversations = filteredConversations.length;

    // set Dokomo badge
    Dokomo.setBadge(unreadConversations);
  };

  Dokomo.loop(getMessages);

  Dokomo.injectCSS(_path.default.join(__dirname, 'service.css'));
};
