console.log('hello world');

const passwordInput = document.querySelector('#password-input');
const confirmPasswordInput = document.querySelector('#confirm-password-input');
const form = document.querySelector('form');
const error = document.querySelector('#error');

function checkPasswordMatch(e) {
  console.log(confirmPasswordInput.value, 'cnfr', passwordInput.value, 'pwd');
  if (passwordInput.value !== confirmPasswordInput.value) {
    error.textContent = '*Passwords do not match';
    passwordInput.style.border = '1px solid red';
    confirmPasswordInput.style.border = '1px solid red';
    console.log(confirmPasswordInput.value, passwordInput.value);
    e.preventDefault();
  } else {
    confirmPasswordInput.setCustomValidity('');
    error.textContent = '';
    passwordInput.style.border = '1px solid darkolivegreen';
    confirmPasswordInput.style.border = '1px solid darkolivegreen';
    console.log(confirmPasswordInput.value, passwordInput.value);
    form.reset();
  }

  console.log(form.checkValidity());
  console.log(confirmPasswordInput.value, passwordInput.value);
}

form.addEventListener('submit', checkPasswordMatch);
