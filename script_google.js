document.addEventListener('DOMContentLoaded', () => {
    
    new MutationObserver(() => {
        // icons
        const twitterFavicons = document.querySelectorAll("a[href*='twitter.com'] img.XNo5Ab, a[href*='twitter.com'] img.no69gc");
        if (twitterFavicons) {
            changeFavicon(twitterFavicons);
        }
        const XFavicons = document.querySelectorAll("a[href^='https://x.com'] img.XNo5Ab, a[href^='https://x.com'] img.no69gc");
        if (XFavicons) {
            changeFavicon(XFavicons);
        }
        const tcoFavicons = document.querySelectorAll("a[href^='https://t.co/'] img.XNo5Ab, a[href^='https://t.co/'] img.no69gc");
        if (tcoFavicons) {
            changeFavicon(tcoFavicons);
        }

        // Titles
        const titles = document.querySelectorAll("a[href*='twitter.com'] h3");
        titles.forEach(element => {
            const innerText = element.innerText;
            if (!innerText.includes('/ X')) return;
            element.innerHTML = (element.innerText).replace('/ X', '/ Twitter');
        });
    }).observe(document.body, {
        childList: true,
        subtree: true
    });
});

function changeFavicon(imgs) {
    if (!imgs) return;
    imgs.forEach(element => {
        if (element.src == TWITTER_FAVICON) return;
        element.src = TWITTER_FAVICON;
    });
}
