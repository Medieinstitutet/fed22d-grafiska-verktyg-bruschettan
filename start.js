const smallerText = document.querySelector('.smaller-text');
const largerText = document.querySelector('.larger-text');

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
