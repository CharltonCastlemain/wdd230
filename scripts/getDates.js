document.addEventListener('DOMContentLoaded', function() {
    // Get current year for copyright
    var currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
  
    // Get last modified date and time
    var lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;
  });