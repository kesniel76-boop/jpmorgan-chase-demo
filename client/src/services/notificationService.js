const STORAGE_KEY = "jpm_notifications";

export function getNotifications() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function addNotification(title, message) {

  const notifications = getNotifications();

  notifications.unshift({
    id: Date.now(),
    title,
    message,
    date: new Date().toLocaleString(),
    read: false,
  });

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(notifications)
  );
}

export function markAsRead(id) {

  const notifications = getNotifications();

  const updated = notifications.map((item) =>
    item.id === id
      ? { ...item, read: true }
      : item
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );
}

export function deleteNotification(id) {

  const notifications = getNotifications();

  const updated = notifications.filter(
    (item) => item.id !== id
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );
}

export function unreadCount() {

  return getNotifications().filter(
    (item) => !item.read
  ).length;

}