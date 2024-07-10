document.addEventListener('DOMContentLoaded', function() {
    let pageVisits = localStorage.getItem('pageVisits') || 0;
    pageVisits++;
    localStorage.setItem('pageVisits', pageVisits);
    document.getElementById('pageVisits').textContent = pageVisits;
});