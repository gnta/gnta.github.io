self.addEventListener('push', function (event) {
  self.registration.showNotification('Its Works', {
    body: 'Your amazingg bro',
  });
});
