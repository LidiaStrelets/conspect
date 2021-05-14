const notificationRef = document.querySelector('.alert');
console.log(notificationRef);
let hidingTimerId = null;
notificationRef.addEventListener('click', handleNotificationClick);

showNotification();

function handleNotificationClick() {
  hideNotification();
  clearTimeout(hidingTimerId);
}

function showNotification() {
  notificationRef.classList.add('is-visible');
  hidingTimerId = setTimeout(hideNotification, 3000);
}
function hideNotification() {
  notificationRef.classList.remove('is-visible');
}

notificationRef.addEventListener('mouseenter', () => {
  console.log('im here');
  clearTimeout(hidingTimerId);
});
notificationRef.addEventListener('mouseleave', () => {
  console.log('im out');
  hidingTimerId = setTimeout(hideNotification, 3000);
});
