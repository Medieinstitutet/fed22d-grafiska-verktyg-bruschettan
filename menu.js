const menuBtn = document.querySelector('#menu-button');
const menuNav = document.querySelector('.menu-nav');

const menuToggle = () => {
  menuNav.classList.toggle('hidden');
};
menuBtn.addEventListener('click', menuToggle);
