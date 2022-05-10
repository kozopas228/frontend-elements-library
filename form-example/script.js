const form = document.forms[0];



const emailInput = form.formEmail;
emailInput.addEventListener('input', () => {
  if (!emailInput.value.toLowerCase().match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )) {
    if (!emailInput.nextElementSibling) {
      emailInput.insertAdjacentHTML('afterend', `
      <p class="form-invalid">Email is wrong!</p>
      `);
    }
  } else {
    emailInput.parentElement.lastElementChild.remove();
  }
});



const passwordInput = form.formPassword;
passwordInput.addEventListener('input', () => {
  if (passwordInput.value.length < 8) {
    if (!form.querySelector('.form-invalid-password-length')) {
      passwordInput.insertAdjacentHTML('afterend', `
      <p class="form-invalid form-invalid-password-length">
        Password length must be over 8 characters
      </p>
      `);
    }
  } else {
    const _element = document.querySelector('.form-invalid-password-length');
    if (_element) {
      _element.remove();
    }
  }

  const containsNumber = passwordInput.value
    .split('')
    .filter(x => isFinite(parseInt(x)))
    .length > 0;
  if (!containsNumber) {
    if (!form.querySelector('.form-invalid-password-doesnt-contain-number')) {
      passwordInput.insertAdjacentHTML('afterend', `
      <p class="form-invalid form-invalid-password-doesnt-contain-number">
        Password must contain at lest one number
      </p>
      `);
    }
  } else {
    const _element = document.querySelector('.form-invalid-password-doesnt-contain-number');
    if (_element) {
      _element.remove();
    }
  }
});



form.addEventListener('submit', event => {
  if (form.querySelectorAll('.form-invalid').length > 0) {
    event.preventDefault();
  }
});



const fileInput = form.formImage;
fileInput.addEventListener('change', () => {
  let file = fileInput.files[0];
  const url = URL.createObjectURL(file);
  form.querySelector('.formImageBlock').insertAdjacentHTML('beforeend', `
    <img alt="" title="test" src=${url}/>
  `);
});
