import { Back, gsap } from 'gsap';

const smallerText = document.querySelector('.smaller-text');
const largerText = document.querySelector('.larger-text');
const firefly = document.querySelector('#firefly');

// eslint-disable-next-line prefer-const
let mediaquary = gsap.matchMedia();

function changeTextAmount() {
  if (window.innerWidth > 480) {
    smallerText.classList.add('visually-hidden');
    largerText.classList.remove('visually-hidden');
  } else if (window.innerWidth < 480) {
    smallerText.classList.remove('visually-hidden');
    largerText.classList.add('visually-hidden');
  }
}

window.addEventListener('resize', changeTextAmount);

mediaquary.add('(max-width: 350px)', () => {
  gsap.fromTo(firefly, { y: -400 }, { y: 0, duration: 2.5, ease: Back.easeOut });
});

mediaquary.add('(min-width: 351px)', () => {
  gsap.fromTo(firefly, { y: -300 }, { y: 0, duration: 1.7, ease: Back.easeOut });
});
