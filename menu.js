import { gsap } from 'gsap';

const menuBtn = document.querySelector('.menu-button-container');
const menuBtnStripes = document.querySelector('.menu-btn-stripes span:nth-child(1)');
const menuNav = document.querySelector('.menu-nav');
// const menuTl = new gsap.timeline({ repeat: 0, repeatDelay: 0 }); // for infinite repeat add -1

/**
 * Menu toggle for mobile/tablet
 */

const menuToggle = () => {
  menuNav.classList.toggle('hidden');
  if (!menuNav.classList.contains('hidden')) {
    menuBtnStripes.classList.add('open');
    gsap.to('.menu-nav', {
      yPercent: 0,
      duration: 1,
      ease: 'bounce',
    });

    gsap.to(menuBtnStripes, {
      x: -50,
      opacity: 0,
    });
  } else {
    menuBtnStripes.classList.remove('open');
    gsap.to('.menu-nav', {
      yPercent: -100,
      ease: 'none',
    });

    gsap.to(menuBtnStripes, {
      x: 0,
      opacity: 1,
    });
  }
};

menuBtn.addEventListener('click', menuToggle);
menuNav.classList.toggle('hidden');
