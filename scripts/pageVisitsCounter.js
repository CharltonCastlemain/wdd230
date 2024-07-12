document.addEventListener('DOMContentLoaded', function() {
    let pageVisits = localStorage.getItem('pageVisitsCounter') || 0;
    pageVisits++;
    localStorage.setItem('pageVisitsCounter', pageVisits);
    document.getElementById('pageVisitsCounter').textContent = pageVisits;
});