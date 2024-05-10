const notifications = document.querySelectorAll('.notification');
const notificationCountSpan = document.querySelector('.notifications-header-count');
const markAllAsReadButton = document.querySelector('.mark-all-as-read-button');

let notificationCount = 0;

const setNotificationType = () => {
    notifications.forEach((notification) => {
        const notificationType = notification.querySelector('.notification-type');
        const notificationContainer = notificationType.closest('.notification');

        if (notificationContainer.classList.contains('post-reaction')) {
            notificationType.innerHTML = 'reacted to your recent post';
        } else if (notificationContainer.classList.contains('follow')) {
            notificationType.innerHTML = 'followed you';
        } else if (notificationContainer.classList.contains('group-join')) {
            notificationType.innerHTML = 'has joined your group';
        } else if (notificationContainer.classList.contains('group-exit')) {
            notificationType.innerHTML = 'left the group';
        } else if (notificationContainer.classList.contains('private-message')) {
            notificationType.innerHTML = 'sent you a private message';
        } else if (notificationContainer.classList.contains('picture-comment')) {
            notificationType.innerHTML = 'commented on your picture';
        }
    });
};

const updateNotificationCount = () => {
    notificationCount = document.querySelectorAll('.unread').length;

    if (notificationCount > 0) {
        notificationCountSpan.innerHTML = notificationCount;
    } else {
        notificationCountSpan.classList.add('no-notification-count');
    }
}

const markAsRead = (event) => {
    const notificationsContainer = event.target.closest('.notification');

    if (notificationsContainer) {
        notificationsContainer.classList.remove('unread');
        notificationsContainer.querySelector('.unread-badge').classList.remove('unread-active');
    } else if (markAllAsReadButton) {
        notifications.forEach((notification) => {
            notification.classList.remove('unread');
            notification.querySelector('.unread-badge').classList.remove('unread-active');
        })
    }
    updateNotificationCount();
};

updateNotificationCount();
setNotificationType();

notifications.forEach((notification) => {
    notification.addEventListener('click', markAsRead);
});
markAllAsReadButton.addEventListener('click', markAsRead);

