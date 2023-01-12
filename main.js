/* eslint-disable prefer-const */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import './src/style/style.scss';

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
{
  name: 'FireFly 900',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis.',
  img1: '900_1.png',
  img2: '900_2.png',
},
];

const cardsHolder = document.querySelector('#cards-holder');
let cardsHtml = '';
let mobileSwipeHtml = '';
let swiper = '';
let swiper2 = '';

// funktion för att skapa två olika slideshows
function createSwipers() {
  // den inre slidern, med klickbara prickar och autoplay
  const swiper = new Swiper('.mySwiper1', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  });
  // den yttre swipern, med pilar
  const swiper2 = new Swiper('.mySwiper2', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

// skapar html för stor skärm där inte yttre slidern är med
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

// Array med html för slides till den yttre slidern i mobilvy
const cardsArray = document.querySelectorAll('.card');

cardsArray.forEach((card) => {
  mobileSwipeHtml += `
  <div class="swiper-slide">${card.innerHTML}</div>
  `;
});

function createSwipe() {
  /// obs, fel värde här pga sidescroll, fixa när vi
  // gör slutputs
  if (window.innerWidth < 1000) {
    cardsHolder.innerHTML = `
    <div class="swiper mySwiper2">
        <div class="swiper-wrapper">
        ${mobileSwipeHtml}
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>`;
    createSwipers();
  } else {
    cardsHolder.innerHTML = cardsHtml;
    createSwipers();
  }
}

createSwipe();
createSwipers();

// EventListener som känner av skärmbredd, för att göra sidan responsiv
window.addEventListener('resize', createSwipe);
