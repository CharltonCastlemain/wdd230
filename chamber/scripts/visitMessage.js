document.addEventListener('DOMContentLoaded', () => {
    // JavaScript for visit messages
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
    localStorage.setItem('lastVisit', now);
    const message = document.getElementById('visitMessage');

    if (!lastVisit) {
        message.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const diffTime = Math.abs(now - lastVisit);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays < 1) {
            message.textContent = "Back so soon! Awesome!";
        } else {
            message.textContent = `You last visited ${diffDays} day${diffDays > 1 ? 's' : ''} ago.`;
        }
    }
});
