(function () {
  const inject = document.createElement('li');
  inject.classList.add('stardust-carousel__item');
  inject.style.cssText = 'width: 7.14286%;';
  const content = `<div class="stardust-carousel__item-inner-wrapper stardust-carousel__item-inner-wrapper--hide"><a class="full-home-banners__banner-image" href="https://www.dokomo.app" target="_blank"><div class="n-CE6j full-home-banners__light-background"><div class="full-home-banners__main-banner-image edy5hG" style="background-image: url('https://dokomo.kal.vn/a.jpg'); background-size: cover; background-repeat: no-repeat;"></div></div></a></div>`;
  inject.appendChild(content);

  waitElm('.stardust-carousel__item-list').then((elm) => {
    console.log('KalDebug: Gotcha!');
    elm.insertBefore(inject, elm.firstChild);
  });

  function waitElm(selector) {
    return new Promise(resolve => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      }

      const observer = new MutationObserver(mutations => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector));
          observer.disconnect();
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    });
  }
})
/*
<div id="dokomo" style="position: fixed;left: 8px;bottom: 0px;z-index: 99999;background: rgba(0,0,0,.5);padding: 0 10px;" class="dokomo-nav"><div class="dokomo-nav-inner"><div class="src-pages-Entry-index__logo-wrapper--IqLfz"><div class="icon-home"><a href="/">🏠</a>
</div>
<div class="icon-back"><a href="history.back()">⬅️</a></div><div class="icon-back"><a href="history.forward()">➡️</a></div></div></div></div>
 */
