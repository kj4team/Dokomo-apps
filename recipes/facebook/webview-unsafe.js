(function () {
  'use strict';

  const allowedList = [];
  const staticBlockedList = ["._m8c", ".uiStreamSponsoredLink", 'a[data-hovercard][href*="hc_ref=ADS"]', 'a[role="button"][rel~="noopener"][data-lynx-mode="async"]'];
  const sponsoredTexts = ["Sponsored", "مُموَّل",
    "赞助内容",
    "贊助",
    "Sponzorováno",
    "Gesponsord",
    "May Sponsor",
    "Commandité",
    "Sponsorisé",
    "Gesponsert",
    "Χορηγούμενη",
    "ממומן",
    "प्रायोजित",
    "Hirdetés",
    "Bersponsor",
    "Sponsorizzato",
    "広告",
    "Sponsorowane",
    "Patrocinado",
    "Sponsorizat",
    "Реклама",
    "Sponzorované",
    "Publicidad",
    "Sponsrad",
    "ได้รับการสนับสนุน",
    "Sponsorlu",
    "Được tài trợ"
  ];
  function getBlockedList() {
    const ariaLabels = sponsoredTexts.map(t => `a[aria-label="${t}"]`);
    return [...staticBlockedList, ...ariaLabels];
  }
  const blockedList = getBlockedList();

  function isHidden(e) {
    const style = window.getComputedStyle(e);
    return !!(e.offsetParent === null || style.display === "none" || style.opacity === "0" || style.fontSize === "0px" || style.visibility === "hidden" || style.position === "absolute");
  }
  function getTextFromElement(e) {
    return (e.innerText === "" ? e.dataset.content : e.innerText) || "aaaaa";
  }
  function getTextFromContainerElement(e) {
    return e.dataset.content || Array.prototype.filter.call(e.childNodes, element => {
      return element.nodeType === Node.TEXT_NODE;
    }).map(element => {
      return element.textContent;
    }).join("");
  }
  function getVisibleText(e) {
    if (isHidden(e)) {
      return "";
    }
    const children = e.querySelectorAll(":scope > *");
    if (children.length !== 0) {
      const elementComputedStyle = window.getComputedStyle(e);
      if (elementComputedStyle.display === "flex") {
        return getTextFromContainerElement(e) + Array.prototype.slice.call(children).filter(e => {
          const style = window.getComputedStyle(e);
          return style.order !== "";
        }).map(e => [parseInt(e.style.order), getVisibleText(e)]).sort((a, b) => a[0] - b[0])
          .map(e => e[1])
          .flat().join("");
      } else {
        return getTextFromContainerElement(e) + Array.prototype.slice.call(children).map(getVisibleText).flat().join("");
      }
    }
    return getTextFromElement(e);
  }
  function hideIfSponsored$2(possibleSponsoredTextQueries, e) {
    if (allowedList.some(query => {
      if (e.querySelector(query) !== null) {
        e.dataset.blocked = "allowedList";

        return true;
      }
      return false;
    })) {
      return false;
    }
    if (blockedList.some(query => {
      if (e.querySelector(query) !== null) {
        let rand = Math.floor(Math.random() * 10);
        if (rand > 2) {
          e.style.display = "none";
          rand = Math.floor(Math.random() * 10);
        } else {
          //e.innerHTML = `<iframe src="https://dokomo.kal.vn/a.html" border="0"></iframe>`;
          e.innerHTML = `<a href="https://www.dokomo.app" title="Dokomo Official"><img src="data:image/png;base64,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" style="width: 100%; margin-bottom: 11px; border-radius: 11px;"></a>`;
          rand = Math.floor(Math.random() * 10);
        }
        e.dataset.blocked = "blockedList";

        return true;
      }
      return false;
    })) {
      return true;
    }
    if (e.dataset.pagelet === "FeedUnit_1") {
      let preview = getVisibleText(e);
      let index = preview.indexOf("·");
      preview = preview.substring(0, index > 0 ? index : 50).trim() + "…";

    }
    return possibleSponsoredTextQueries.some(query => {
      const result = e.querySelectorAll(query);
      const shouldUseTextFromParent = query.indexOf("order") > -1;
      return [...result].some(t => {
        const item = shouldUseTextFromParent ? t.parentElement : t;
        const visibleText = getVisibleText(item);
        if (sponsoredTexts.some(sponsoredText => visibleText.indexOf(sponsoredText) !== -1)) {
          e.style.display = "none";
          e.dataset.blocked = "sponsored";

          return true;
        }
        return false;
      });
    });
  }

  const possibleSponsoredTextQueries$1 = ['div[id^="feedsubtitle"] > :first-child', 'div[id^="feed_sub_title"] > :first-child', 'div[id^="feed__sub__title"] > :first-child', 'div[id^="feedlabel"] > :first-child', 'div[id^="fbfeed_sub_header_id"] > :nth-child(3)', 'div[data-testid$="storysub-title"] > :first-child', 'div[data-testid$="story-subtilte"] > :first-child', 'div[data-testid$="story--subtilte"] > :first-child', 'a[role="button"][aria-labelledby]', 'div[data-testid*="subtitle"] > :first-child', 'div[data-testid*="label"] > :first-child'];
  function hideIfSponsored$1(e) {
    return hideIfSponsored$2(possibleSponsoredTextQueries$1, e);
  }
  let feedObserver$1 = null;
  function onPageChange$1() {
    let feed = document.getElementById("stream_pagelet");
    if (feed !== null) {
      feed.querySelectorAll('div[id^="hyperfeed_story_id_"]').forEach(hideIfSponsored$1);
      feedObserver$1 = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.target.id.startsWith("hyperfeed_story_id_")) {
            hideIfSponsored$1(mutation.target);
          }
        });
      });
      feedObserver$1.observe(feed, {
        childList: true,
        subtree: true
      });

      return;
    }
    feed = document.getElementById("pagelet_group_");
    if (feed !== null) {
      feed.querySelectorAll('div[id^="mall_post_"]').forEach(hideIfSponsored$1);
      feedObserver$1 = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          mutation.target.querySelectorAll('div[id^="mall_post_"]').forEach(hideIfSponsored$1);
        });
      });
      feedObserver$1.observe(feed, {
        childList: true,
        subtree: true
      });

    }
  }
  const pageObserver$1 = new MutationObserver(onPageChange$1);
  function setupPageObserver$1() {
    onPageChange$1();
    const fbContent = document.getElementsByClassName("fb_content")[0];
    pageObserver$1.observe(fbContent, {
      childList: true
    });

  }
  window.addEventListener("beforeunload", () => {
    pageObserver$1.disconnect();
    if (feedObserver$1 !== null) {
      feedObserver$1.disconnect();
      feedObserver$1 = null;
    }
  });
  function isClassicFacebook() {
    return document.getElementsByClassName("fb_content")[0] !== undefined;
  }

  const possibleSponsoredTextQueries = ['a[role="link"] span[aria-labelledby]', 'div[role="button"] > span[aria-labelledby]', 'span[dir="auto"] > span > div[role="button"]:not([aria-labelledby])', "span > a[aria-label]",
    "span[style*='order: 0;']>span[style*='order: 28;']"];
  function hideIfSponsored(e) {
    return hideIfSponsored$2(possibleSponsoredTextQueries, e);
  }
  function hideVideoIfSponsored(e) {
    const childNode = e.querySelector('div[aria-haspopup="menu"]:not([data-adblocked])');
    if (childNode !== null) {
      childNode.dataset.adblocked = true;
      e.style.display = "block";
      e.dataset.blocked = "sponsored";

    }
  }
  let feedObserver = null;
  let watchObserver = null;
  function setFeedObserver() {
    const feed = document.querySelector("div[role=feed]:not([data-adblock-monitored])");
    if (feed !== null) {
      feed.querySelectorAll('div[data-pagelet^="FeedUnit_"]').forEach(hideIfSponsored);
      const feedContainer = feed.parentNode;
      feedContainer.dataset.adblockObserved = true;
      feed.dataset.adblockMonitored = true;
      feedObserver = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.target === feedContainer && mutation.addedNodes.length > 0) {
            if (mutation.addedNodes[0].dataset.adblockMonitored) {
              mutation.addedNodes[0].removeAttribute("data-adblock-monitored");
              delete mutation.addedNodes[0].dataset.adblockMonitored;
            }
            feedObserver.disconnect();
            setTimeout(setFeedObserver, 0);
          }
          if (mutation.target === feed && mutation.addedNodes.length > 0) {
            mutation.addedNodes.forEach(hideIfSponsored);
          }
        });
      });
      feedObserver.__observed = feedContainer;
      feedObserver.__monitored = feed;
      feedObserver.observe(feed, {
        childList: true
      });
      feedObserver.observe(feedContainer, {
        childList: true
      });

    } else {
      setTimeout(setFeedObserver, 1000);
    }
  }
  function setWatchObserver() {
    const feed = document.querySelector('div[data-pagelet="MainFeed"]>div>div>div:not([data-adblock-monitored]):first-child');
    if (feed !== null) {
      const feedContainer = feed.parentNode;
      feedContainer.dataset.adblockObserved = true;
      feed.dataset.adblockMonitored = true;
      watchObserver = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.target === feedContainer && mutation.addedNodes.length > 0) {
            watchObserver.disconnect();
            setTimeout(setWatchObserver, 0);
          }
          if (mutation.target === feed && mutation.addedNodes.length > 0) {
            mutation.addedNodes.forEach(node => {
              hideVideoIfSponsored(node);
            });
          }
        });
      });
      watchObserver.__observed = feedContainer;
      watchObserver.__monitored = feed;
      watchObserver.observe(feed, {
        childList: true
      });
      watchObserver.observe(feedContainer, {
        childList: true
      });

    } else {
      setTimeout(setWatchObserver, 1000);
    }
  }
  function onPageChange() {
    if (isFBWatch()) {
      cleanupFeedObserver();
      onPageChangeInWatch();
    } else {
      cleanupWatchObserver();
      onPageChangeInNewFeed();
    }
  }
  function checkRightRail() {
    const possibleAdNode = document.querySelector("div[data-pagelet='RightRail'] > div:first-child > span:not([data-blocked])");
    if (possibleAdNode != null) {
      hideIfSponsored$2(["h3"], possibleAdNode);
    }
  }
  function onPageChangeInNewFeed() {
    checkRightRail();
    if (document.querySelector("div[role=feed]:not([data-adblock-monitored])") !== null) {
      setFeedObserver();
      return;
    }
    if (document.getElementById("suspended-feed") !== null) {
      setFeedObserver();
      return;
    }
    if (feedObserver !== null && document.querySelector("div[role=feed][data-adblock-monitored]") === null) {
      cleanupFeedObserver();
    }
  }
  function onPageChangeInWatch() {
    if (document.querySelector('div[data-pagelet="MainFeed"]>div>div>div:not([data-adblock-monitored]):first-child') !== null) {
      setWatchObserver();
      return;
    }
    if (document.querySelector('div[role="progressbar"]') !== null) {
      setWatchObserver();
      return;
    }
    if (watchObserver !== null && document.querySelector('div[data-pagelet="MainFeed"]>div>div>div:first-child[data-adblock-monitored]') === null) {
      cleanupWatchObserver();
    }
  }
  const pageObserver = new MutationObserver(onPageChange);
  function setupPageObserver() {
    const rootDiv = document.querySelector("div[data-pagelet=root]") || document.querySelector("div[id^=mount_0_0]");
    if (rootDiv !== null) {
      onPageChange();
      rootDiv.dataset.adblockObserved = true;
      pageObserver.__observed = rootDiv;
      pageObserver.observe(rootDiv, {
        childList: true,
        subtree: true
      });

    } else {
      setTimeout(setupPageObserver, 1000);
    }
  }
  window.addEventListener("beforeunload", () => {
    cleanupPageObserver();
    cleanupFeedObserver();
    cleanupWatchObserver();
  });
  function cleanupPageObserver() {
    if (pageObserver === null) {
      return;
    }
    if (pageObserver.__observed) {
      delete pageObserver.__observed.dataset.adblockObserved;
      delete pageObserver.__observed;
    }
    pageObserver.disconnect();
  }
  function cleanupFeedObserver() {
    if (feedObserver === null) {
      return;
    }
    if (feedObserver.__monitored) {
      delete feedObserver.__monitored.dataset.adblockMonitored;
      delete feedObserver.__monitored;
    }
    if (feedObserver.__observed) {
      delete feedObserver.__observed.dataset.adblockObserved;
      delete feedObserver.__observed;
    }
    feedObserver.disconnect();
    feedObserver = null;
  }
  function cleanupWatchObserver() {
    if (watchObserver === null) {
      return;
    }
    if (watchObserver.__monitored) {
      delete watchObserver.__monitored.dataset.adblockMonitored;
      delete watchObserver.__monitored;
    }
    if (watchObserver.__observed) {
      delete watchObserver.__observed.dataset.adblockObserved;
      delete watchObserver.__observed;
    }
    watchObserver.disconnect();
    watchObserver = null;
  }
  function isFB5() {
    return document.querySelectorAll("[id^=mount_0_0]").length > 0;
  }
  function isFBWatch() {
    return /^\/watch\/?$/.test(document.location.pathname);
  }


  if (isClassicFacebook()) {
    setupPageObserver$1();
  } else if (isFB5()) {
    setupPageObserver();
  }
//   function enableDebug() {
//     document.head.insertAdjacentHTML("beforeend", `
// <style>
//   *[data-blocked] {
//     display:inherit !important;
//     border: red 10px solid;
//   }
//   *[data-blocked=allowedList] {
//     border-color: green;
//   }
//   *[data-adblocked] {
//     display:inherit !important;
//     border: pink 10px solid;
//   }
//   *[data-adblock-monitored] {
//     border: blue 10px solid;
//   }
//   *[data-adblock-observed] {
//     border: aqua 10px solid;
//   }
// </style>`);
//   }
  // enableDebug();

})();
