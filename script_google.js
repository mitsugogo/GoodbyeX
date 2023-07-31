document.addEventListener('DOMContentLoaded', () => {
    // favicon
    waitForSelectors("a[href*='twitter.com'] img.XNo5Ab, a[href*='twitter.com'] img.no69gc").then(changeFavicon);
    waitForSelectors("a[href^='https://x.com'] img.XNo5Ab, a[href^='https://x.com'] img.no69gc").then(changeFavicon);
    waitForSelectors("a[href^='https://t.co/'] img.XNo5Ab, a[href^='https://t.co/'] img.no69gc").then(changeFavicon);
});

function changeFavicon(imgs) {
    if (!imgs) return;
    imgs.forEach(element => {
        element.src = TWITTER_FAVICON;
    });
}
