self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('pwa-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './service-worker.js',
        'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.8/pdfmake.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.8/vfs_fonts.js',
        'https://cdn.jsdelivr.net/npm/signature_pad'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
