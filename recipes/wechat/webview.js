const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Dokomo => {
  const getMessages = () => {
    let directCount = 0;
    let indirectCount = 0;
    const chat_item = document.querySelectorAll('div.chat_item');

    Array.prototype.forEach.call(chat_item, item => {
      let count = 0;
      const reddot = item.querySelector('i.web_wechat_reddot_middle');
      const avatarImage = item.querySelector('img.img');

      if (reddot) {
        count = Dokomo.safeParseInt(reddot.textContent);
      }

      if (
        avatarImage &&
        avatarImage.getAttribute('src').search('webwxgeticon') != -1
      ) {
        directCount += count;
      } else {
        indirectCount += count;
      }
    });

    Dokomo.setBadge(directCount, indirectCount);
  };

  Dokomo.loop(getMessages);

  Dokomo.injectCSS(_path.default.join(__dirname, 'service.css'));
};
