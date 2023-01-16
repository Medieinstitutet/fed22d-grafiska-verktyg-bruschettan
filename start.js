import { Back, gsap } from 'gsap';

const headerText = document.querySelector('.header_text');
const firefly = document.querySelector('#firefly');

// eslint-disable-next-line prefer-const
let mediaquary = gsap.matchMedia();

mediaquary.add('(max-width: 600px)', () => {
  gsap.fromTo(firefly, { y: -300 }, { y: -10, duration: 1.7, ease: Back.easeOut });
});

mediaquary.add('(min-width: 601px)', () => {
  gsap.fromTo(firefly, { y: -300 }, { y: 0, duration: 1.7, ease: Back.easeOut });
});

function changeTextAmount() {
  if (window.innerWidth > 480) {
    headerText.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    + 'Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur '
    + 'voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, '
    + 'eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut '
    + 'molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! ';
  } else if (window.innerWidth < 480) {
    headerText.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, '
    + 'molestiae quas vel sint commodi praesentium optio, eaque rerum! '
    + 'Provident similique accusantium nemo autem. Veritatis  culpa officia aut! ';
  }
}

function resizeTimer() {
  const timeOut = setTimeout(changeTextAmount, 500);
  clearTimeout(timeOut);
}

window.addEventListener('resize', resizeTimer);

changeTextAmount();
