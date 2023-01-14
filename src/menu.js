import { gsap } from 'gsap';

const menuBtn = document.querySelector('.menu-button-container');
const menuBtnMiddleStripe = document.querySelector('.menu-btn-stripes span:nth-child(1)');
const menuBtnTopStripe = document.querySelector('.menu-btn-stripes span:nth-child(2)');
const menuBtnBottomStripe = document.querySelector('.menu-btn-stripes span:nth-child(3)');
const menuFirelyMove = document.querySelector('#firefly');
const menuNav = document.querySelector('.menu-nav');

// load page with hidden menu
menuNav.classList.toggle('hidden-menu');

/**
 * Menu toggle for all devices
 */

const menuToggle = () => {
  // eslint-disable-next-line new-cap

  menuNav.classList.toggle('hidden-menu');
  if (!menuNav.classList.contains('hidden-menu')) {
    gsap.to(menuFirelyMove, {
      scaleX: (-1),
      transform: 'translatex(-40vw)',
      rotation: '45_cw',
      y: 15,
      opacity: 0,
    });

    gsap.fromTo(
      menuNav,
      {
        yPercent: -100,
        opacity: 0.2,
      },
      {
        yPercent: 0,
        opacity: 1,
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
    gsap.to(menuFirelyMove, {
      scaleX: (1),
      transform: 'translatex(0)',
      y: 0,
      opacity: 1,
    });
  }
};

menuBtn.addEventListener('click', menuToggle);
