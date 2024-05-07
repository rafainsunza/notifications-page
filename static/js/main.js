const notifications = document.querySelectorAll('.notification');

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

setNotificationType();
