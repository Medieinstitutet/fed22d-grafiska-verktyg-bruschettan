const submitBtn = document.getElementById('submitBtn'); // Hämtar submit knappen
const emailInput = document.getElementById('email'); // Hämtar Inputfält för email

function submitBtnDisabled() {
  // eslint-disable-next-line no-useless-escape
  if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailInput.value)) {
    submitBtn.classList.remove('disabledBtn');
    submitBtn.removeAttribute('disabled');
    return;
  }

  submitBtn.classList.add('disabledBtn');
  submitBtn.setAttribute('disabled', '');
}

emailInput.addEventListener('input', submitBtnDisabled);
