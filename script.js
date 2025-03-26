document.addEventListener('DOMContentLoaded', function() {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? parseInt(match[2]) : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/;SameSite=Lax`;
  }

  // Function to update and display the count
  function updateCount() {
    let count = getCookie('count');
    if (isNaN(count)) {
      count = 0; // Initialize cookie if it doesn't exist
    }
    count++; // Increment count
    setCookie('count', count, 30); // Update cookie with new count

    // Ensure the display element exists
    let countElement = document.getElementById('countDisplay');
    if (!countElement) {
      countElement = document.createElement('div');
      countElement.id = 'countDisplay';
      countElement.style.fontSize = '20px';
      countElement.style.marginTop = '10px';
      document.body.appendChild(countElement);
    }
    
    countElement.textContent = `Page Views: ${count}`;
  }

  updateCount();
});
