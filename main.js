import './src/style/style.scss';
// import { gsap } from 'gsap'; // kommentera ut detta om ni vill använda gsap

const cards = [{
  name: 'FireFly 300',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis.',
  img1: 'gadget_desktop.png',
}
];

const cardsHolder = document.querySelector('#cards-holder');

cards.forEach((card) => {
  cardsHolder.innerHTML+=`
  <h3>${card.name}</h3>
  <p>${card.description}</p>`
});