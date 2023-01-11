/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
import './src/style/style.scss';
// import { gsap } from 'gsap'; // kommentera ut detta om ni vill använda gsap

const cards = [{
  name: 'FireFly 300',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis.',
  img1: 'gadget_desktop.png',
  img2: 'gadget_desktop.png',
},
{
  name: 'FireFly 700',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis.',
  img1: 'gadget_desktop.png',
  img2: 'gadget_desktop.png',
},
];

const cardsHolder = document.querySelector('#cards-holder');
let cardsHtml = '';
let mobileSwipeHtml = '';
// eslint-disable-next-line prefer-const, no-unused-vars
let swiper = '';
// eslint-disable-next-line prefer-const, no-unused-vars
let swiper2 = '';

function createCards() {
  cards.forEach((card) => {
    cardsHtml += `
    <div class="card">
      <h3>${card.name}</h3>
  
      <div class="swiper mySwiper1">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="/assets/${card.img1}"></div>
          <div class="swiper-slide"><img src="/assets/${card.img2}"></div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
  
      <p>${card.description}</p>
      
      <button>Order</button>
    </div>`;
  });
}

createCards();

cardsHolder.innerHTML = cardsHtml;
const cardsArray = document.querySelectorAll('.card');

cardsArray.forEach((card) => {
  mobileSwipeHtml += `
  <div class="swiper-slide">${card.innerHTML}</div>
  `;
});

function createMobileSwipe() {
  cardsHolder.innerHTML = `
  <div class="swiper mySwiper2">
      <div class="swiper-wrapper">
      ${mobileSwipeHtml}
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>`;
}

function createSwipers() {
  // eslint-disable-next-line no-unused-vars, no-undef, no-shadow
  const swiper = new Swiper('.mySwiper1', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  });

  // eslint-disable-next-line no-unused-vars, no-undef
  const swiper2 = new Swiper('.mySwiper2', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

function screenSizeMobile() {
  if (window.innerWidth < 480) {
    createMobileSwipe();
    createSwipers();
  } else {
    cardsHolder.innerHTML = cardsHtml;
    createSwipers();
  }
}

screenSizeMobile();

window.addEventListener('resize', screenSizeMobile);
