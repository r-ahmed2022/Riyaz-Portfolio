const showMenu = document.getElementById('open-menu');
showMenu.addEventListener('click', () => {
  document.getElementById('nav-mobile').style.width = '100%';
});

const closebtn = document.getElementById('btn-close');
closebtn.addEventListener('click', () => {
  document.getElementById('nav-mobile').style.width = '0%';
});

function reloadBrowser() {
  window.location.reload();
}

const portfolioElement = document.getElementById('portfolio');
portfolioElement.addEventListener('click', () => {
  document.getElementById('nav-mobile').style.display = 'none';
  reloadBrowser();
});

const aboutElement = document.getElementById('about-1');
aboutElement.addEventListener('click', () => {
  document.getElementById('nav-mobile').style.display = 'none';
  reloadBrowser();
});

const contactElement = document.getElementById('contact');
contactElement.addEventListener('click', () => {
  document.getElementById('nav-mobile').style.display = 'none';
  reloadBrowser();
});

function checkLowerCase(str) {
  const validChar = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const errStr = {};
  if (!str.match(validChar)) {
    errStr.msg = 'Invalid email address';
    errStr.valid = false;
  } else if (str === String(str).toLowerCase()) {
    errStr.valid = true;
  } else {
    errStr.msg = 'Email should be only in Lower case';
  }
  return errStr;
}

const emailValidator = document.getElementById('btn-5');
emailValidator.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  const emailValue = document.getElementById('email-field');
  const Obj = checkLowerCase(emailValue.value);
  if (Obj.valid !== true) {
    document.getElementById('errorMsg').innerText = Obj.msg;
    emailValue.focus();
    emailValue.style.border = 'thick solid #ff0000';
  } else {
    emailValue.style.border = 'thick solid #00ff00';
    document.getElementById('form-1').submit();
  }
});