module.exports = (Dokomo) => {
  const getMessages = () => {
    // get new conversations in My Queue
    const myQueue = $('.super-nav a.super-nav__item.js-from-super-to-nav[href^="/chat/box:my"] .count').not('.count--gray').text();

    // get all missed conversations
    const missed = $('.super-nav a.super-nav__item.js-from-super-to-nav[href^="/chat/box:missed"] .count').text();

    // set Dokomo badge
    // myQueue => New conversations in My Queue
    // missed => All missed conversations
    Dokomo.setBadge(myQueue, missed);
  };

  Dokomo.loop(getMessages);
};
