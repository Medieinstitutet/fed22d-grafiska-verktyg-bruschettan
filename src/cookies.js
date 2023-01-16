const acceptCookiesBtn = document.getElementById('acceptCookiesBtn');
const cookiebar = document.getElementById('cookies');

function acceptCookies() {
  cookiebar.classList.add('display-none');
}

acceptCookiesBtn.addEventListener('click', acceptCookies);
