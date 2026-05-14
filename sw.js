// Offline-first service worker. Cache the shell + CDN deps so the app works
// in patchy signal on the island.
const CACHE = 'skye-wildlife-v15';
const SHELL = [
  './',
  './index.html',
  './species.js',
  './manifest.json',
  'https://cdn.jsdelivr.net/npm/react@18/umd/react.production.min.js',
  'https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.production.min.js',
  'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js',
  'https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap',
];

self.addEventListener('install', e => {
  // Always pull fresh shell from network on install — otherwise the old SW
  // intercepts these fetches and serves stale assets into the new cache.
  e.waitUntil(
    caches.open(CACHE).then(c =>
      Promise.all(SHELL.map(url =>
        fetch(url, { cache: 'reload' }).then(res => res.ok && c.put(url, res))
      ))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(hit => {
      if (hit) return hit;
      return fetch(e.request).then(res => {
        // Opportunistically cache same-origin and font-CDN GETs.
        if (res.ok && (e.request.url.startsWith(self.location.origin) || /fonts\.gstatic|jsdelivr|upload\.wikimedia\.org|en\.wikipedia\.org\/api/.test(e.request.url))) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
