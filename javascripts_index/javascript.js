function copyLink(buttonElement, url) {
    navigator.clipboard.writeText(url).then(() => {
        const parentLi = buttonElement.parentElement;
        const existing = parentLi.querySelector('.copied-notification');
        if (existing) {
            existing.remove();
        }
        const notification = document.createElement('span');
        notification.className = 'copied-notification';
        notification.textContent = 'Copied!';
        parentLi.appendChild(notification);
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.addEventListener('transitionend', () => {
                parentLi.removeChild(notification);
            });
        }, 3000);
    });
}