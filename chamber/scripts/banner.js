document.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    const dayOfWeek = today.getDay(); 
    const banner = document.querySelector('.banner');
    const closeButton = document.getElementById('closeBanner');

    if (dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 3) {
        banner.style.display = 'flex';
    } else {
        banner.style.display = 'none';
    }

    closeButton.addEventListener('click', () => {
        banner.style.display = 'none';
    });
});