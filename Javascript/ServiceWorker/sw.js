const CACHE_NAME = "v1";
const FILES_TO_CACHE = [
    './',
    '/index.html',
    '/style.css',
    '/app.js'
];

// Install event - cache assets
self.addEventListener('install', event => {
    console.log('[SW] Install');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('[SW] Caching all files');
                return cache.addAll(FILES_TO_CACHE);
            })
    );
});

// Activate event - clean old caches if any
self.addEventListener('activate', event => {
    console.log('[SW] Activate');
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.map(key => {
                if (key !== CACHE_NAME) return caches.delete(key);
            }))
        )
    );
});

// Fetch event - serve from cache if offline
self.addEventListener('fetch', event => {
    console.log('[SW] Fetching:', event.request.url);
    event.respondWith(
        fetch(event.request).catch(() =>
            caches.match(event.request)
        )
    );
});
