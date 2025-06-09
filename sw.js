// Nombre de la caché
const CACHE_NAME = 'reticula-creativa-v1';

// Archivos a cachear
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/main.js',
  '/assets/img/logo.png',
  // Añade aquí más recursos estáticos que quieras cachear
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  // Realiza la instalación
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache abierta');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activación del Service Worker
self.addEventListener('activate', event => {
  // Eliminar cachés antiguas
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminando caché antigua:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Estrategia: Cache First, luego red
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Devuelve la respuesta en caché si existe
        if (response) {
          return response;
        }

        // Si no está en caché, haz la petición a la red
        return fetch(event.request).then(
          response => {
            // Verifica si la respuesta es válida
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clona la respuesta
            const responseToCache = response.clone();

            // Almacena en caché la respuesta
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});

// Manejo de notificaciones push
self.addEventListener('push', event => {
  const title = 'Retícula Creativa';
  const options = {
    body: event.data.text(),
    icon: '/assets/img/icon.png',
    badge: '/assets/img/badge.png'
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// Manejo de clics en notificaciones
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  event.waitUntil(
    clients.matchAll({ type: 'window' })
      .then(clientList => {
        for (const client of clientList) {
          if (client.url === '/' && 'focus' in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow('/');
        }
      })
  );
});
