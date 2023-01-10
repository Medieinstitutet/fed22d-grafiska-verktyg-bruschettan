import './src/style/style.scss';
// import { gsap } from 'gsap'; // kommentera ut detta om ni vill använda gsap

const cards = [{
  name: 'FireFly 300',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis.',
  img1: 'gadget_desktop.png',
},
{
  name: 'FireFly 700',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis.',
  img1: 'gadget_desktop.png',
},
];

const cardsHolder = document.querySelector('#cards-holder');

cards.forEach((card) => {
  cardsHolder.innerHTML += `
  <div>
    <h3>${card.name}</h3>

    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="/assets/${card.img1}"></div>
        <div class="swiper-slide"><img src="/assets/${card.img1}"></div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>

    <p>${card.description}</p>
    
    <button>Order</button>
  </div>`;
});

// eslint-disable-next-line no-unused-vars, no-undef
const swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
  },
});

// för att få till swipern runt korten tänket jag man kan använda
// typ firstChild osv.
