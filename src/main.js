/* eslint-disable prefer-const */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import './style/style.scss';

const cards = [{
  name: 'FireFly 300',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis.',
  img1: '300_1.webp',
  img2: '300_2.webp',
},
{
  name: 'FireFly 700',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis.',
  img1: '700_1.webp',
  img2: '700_2.webp',
},
{
  name: 'FireFly 900',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis.',
  img1: '900_1.webp',
  img2: '900_2.webp',
},
];

const cardsHolder = document.querySelector('#cards-holder');
let cardsHtml = '';
let mobileSwipeHtml = '';
let swiper = '';
let swiper2 = '';
let startTimeOut;

// funktion för att skapa två olika slideshows beroende på skärmstorlek
function createSwipers() {
  // den inre slidern, med klickbara prickar och autoplay
  const swiper = new Swiper('.mySwiper1', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
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
      <h3 class="product-name">${card.name}</h3>
  
      <div class="swiper mySwiper1">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="img/${card.img1}" alt="A CPU with flashy colors"></div>
          <div class="swiper-slide"><img src="img/${card.img2}" alt="A CPU with flashy colors"></div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
  
      <p class="card-description">${card.description}<a href="#"> <img src="img/arrow_next.webp" alt="link to description" loading="lazy"></a></p>
      
      <button class="order-btn">Order</button>
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
  if (window.innerWidth < 653) {
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
// window.addEventListener('resize', createSwipe)

function resizeTimers() {
  clearTimeout(startTimeOut);

  startTimeOut = setTimeout(createSwipe, 500);
}

window.addEventListener('resize', resizeTimers);
