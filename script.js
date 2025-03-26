document.addEventListener('DOMContentLoaded', function () {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? parseInt(cookie.split('=')[1]) : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
  }

  // Get the current count from the cookie
  let count = getCookie('count');

  if (count === null) {
    // If the cookie does not exist, create it with an initial value of 1
    count = 1;
  } else {
    // If the cookie exists, increment the count
    count++;
  }

  // Update the cookie with the new count value
  setCookie('count', count, 7); // Cookie expires in 7 days

  // Display the count on the webpage
  let countDisplay = document.createElement('p');
  countDisplay.textContent = `Page visits: ${count}`;
  document.body.appendChild(countDisplay);
});
