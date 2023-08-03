document.addEventListener('DOMContentLoaded', () => {
    // favicon
    const favicon = document.querySelector('link[rel="shortcut icon"]');
    if (favicon) {
        favicon.href = TWITTER_FAVICON;
    }

    // leftbottom sidebar
    waitForSelector('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-5swwoo.r-13qz1uu.r-417010 > div > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1wtj0ep.r-16lhzmz.r-n3sdqm.r-1ag2gil.r-13qz1uu > div.css-901oao.r-1awozwy.r-18jsvk2.r-xoduu5.r-1tl8opc.r-1gkfh8e.r-16dba41.r-1f529hi.r-bcqeeo.r-qvutc0 > span.css-901oao.css-16my406.r-1tl8opc.r-b88u0q.r-bcqeeo.r-qvutc0 > span').then((elem) => {
        if (!elem) return;
        elem.innerHTML = 'TweetDeck';
    });
    waitForSelector('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-5swwoo.r-13qz1uu.r-417010 > div > div > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1wtj0ep.r-16lhzmz.r-n3sdqm.r-1ag2gil.r-13qz1uu > div.css-901oao.r-1awozwy.r-18jsvk2.r-xoduu5.r-1tl8opc.r-1gkfh8e.r-16dba41.r-1f529hi.r-bcqeeo.r-qvutc0 > svg').then((logo) => {
        if (!logo) return;
        logo.outerHTML = '<svg style="width: 18px; color: #2c9bec;" viewBox="0 0 24 24" aria-hidden="true" class="r-13v1u17 r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"> <g> <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path> </g> </svg>';
    });

    // Title
    new MutationObserver(() => {
        const titleElement = document.querySelector('title');
        if (titleElement) {
            titleElement.textContent = titleElement.textContent.replace('XPro', 'TweetDeck');
        }
    }).observe(document.head, {
        childList: true
    });
});
