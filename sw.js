var cacheList = [
    '/',
    "css/main.css",
    "js/main.js",
    "icon.png",
]

self.addEventListener('install', e => e.waitUntil(caches.open("static").then(cache => cache.addAll(cacheList))))

self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(response => response || fetch(e.request.url))))