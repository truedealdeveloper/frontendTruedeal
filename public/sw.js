// Service Worker for Kerala landing page optimization
const CACHE_NAME = "kerala-v1";
const CRITICAL_RESOURCES = [
  "/webImage/kerala/mobile/kerala1.jpg",
  "/UGCImages/kerala/keralaa/backwater.png",
  "/UGCImages/kerala/keralaa/tea.png",
  "/UGCImages/kerala/keralaa/ayurveda.png",
];

// Install event - cache critical resources
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CRITICAL_RESOURCES);
    })
  );
  self.skipWaiting();
});

// Fetch event - serve from cache first for images
self.addEventListener("fetch", (event) => {
  if (event.request.destination === "image") {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request).then((response) => {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return response;
        });
      })
    );
  }
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
