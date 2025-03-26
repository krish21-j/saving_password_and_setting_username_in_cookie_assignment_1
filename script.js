document.addEventListener('DOMContentLoaded', function () {
  let countDisplay = document.getElementById('count-display');

  // Check if the element exists
  if (!countDisplay) {
      console.error("Element with id 'count-display' not found!");
      return;
  }

  function getCookie(name) {
      let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
      return match ? parseInt(match[2]) : null;
  }

  function setCookie(name, value, days) {
      let date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
  }

  let count = getCookie('count');
  count = (count === null || isNaN(count)) ? 0 : count + 1;

  setCookie('count', count, 7);

  countDisplay.textContent = `Page views for this session: ${count}`;
});
