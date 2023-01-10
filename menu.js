import { gsap } from 'gsap';

const menuBtn = document.querySelector('#menu-button');
const menuNav = document.querySelector('.menu-nav');
// const menuTl = new gsap.timeline({ repeat: 0, repeatDelay: 0 }); // for infinite repeat add -1

const menuToggle = () => {
  menuNav.classList.toggle('hidden');
  if (!menuNav.classList.contains('hidden')) {
    gsap.to('.menu-nav', {
      yPercent: 0,
      duration: 1,
      ease: 'bounce',
    });
  } else {
    gsap.to('.menu-nav', {
      yPercent: -100,
      ease: 'none',
    });
  }
};
menuBtn.addEventListener('click', menuToggle);
