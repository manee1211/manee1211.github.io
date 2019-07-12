

'use strict';
self.addEventListener('push', function(event) {
  const data = `${event.data.text()}`;
  var payload = JSON.parse(data);
  var title = payload.hd;
  var imageUrl = payload.i_thb;
  const options = {
    body: payload.msg,
    icon: imageUrl,
    badge: 'images/badge.png',
	image:'images/icon.png'
  };


  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.');

  event.notification.close();

  event.waitUntil(
    clients.openWindow('https://www.comviva.com/')
  );
});
