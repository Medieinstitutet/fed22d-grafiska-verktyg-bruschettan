import { gsap } from 'gsap';

const menuBtn = document.querySelector('.menu-button-container');
const menuBtnMiddleStripe = document.querySelector('.menu-btn-stripes span:nth-child(1)');
const menuBtnTopStripe = document.querySelector('.menu-btn-stripes span:nth-child(2)');
const menuBtnBottomStripe = document.querySelector('.menu-btn-stripes span:nth-child(3)');
const menuNav = document.querySelector('.menu-nav');
// const menuTl = new gsap.timeline({ repeat: 0, repeatDelay: 0 }); // for infinite repeat add -1

menuNav.classList.toggle('hidden-menu');

/**
 * Menu toggle for mobile/tablet
 */

const menuToggle = () => {
  menuNav.classList.toggle('hidden-menu');
  if (!menuNav.classList.contains('hidden-menu')) {
    gsap.fromTo(
      '.menu-nav',
      { yPercent: -100 },
      {
        yPercent: 0,
        ease: 'power1',
      },
    );

    gsap.to(menuBtnMiddleStripe, {
      x: -50,
      opacity: 0,
    });
    gsap.to(menuBtnTopStripe, {
      rotation: '45_short',
      y: 15,
    });
    gsap.to(menuBtnBottomStripe, {
      rotation: '-45_short',
      y: 0,
    });
  } else {
    gsap.to(menuBtnMiddleStripe, {
      x: 0,
      opacity: 1,
    });
    gsap.to(menuBtnTopStripe, {
      y: 0,
      rotation: 0,
    });
    gsap.to(menuBtnBottomStripe, {
      y: 16,
      rotation: 0,
    });
  }
};

menuBtn.addEventListener('click', menuToggle);
