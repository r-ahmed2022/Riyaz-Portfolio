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
  const validChar = /^[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9-]+(?:\.[A-Z0-9-]+)*$/;
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
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('errorMsg');
  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.errorMsg');
  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

// eslint-disable-next-line no-unused-vars
function checkotherFields() {
  const fname = document.getElementById('fname').value.trim();
  const lname = document.getElementById('lname').value.trim();
  const comment = document.getElementById('comments').value.trim();
  let valid = true;
  if (fname === '') {
    setError(fname, 'First Name is required');
  }
  if (fname.split('').length > 30) {
    setError(fname, 'First Name should not exceed 30 characters');
    valid = false;
  }
  setSuccess(fname);
  if (lname === '') {
    setError(fname, 'Last Name is required');
    valid = false;
  } if (fname.split('').length > 30) {
    setError(fname, 'Last Name should not exceed 30 characters');
    valid = false;
  }
  setSuccess(lname);
  if (comment === '') {
    setError(comment, 'Please add a message');
    valid = false;
  } else if (comment.split('').length > 500) {
    setError(comment, 'Message should be short and do not exceed 500 characters');
    valid = false;
  }
  setSuccess(comment);
  valid = true;
  return valid;
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
    document.getElementById('errorMsg').innerText = '';
    emailValue.style.border = 'thick solid #00ff00';
    // eslint-disable-next-line spaced-comment
    //const valid = checkotherFields();
    document.getElementById('form-1').submit();
  }

  let Ename;
  let Elastname;
  const namefiled = document.getElementById('fname');
  if (namefiled.value === '') {
    Ename = '***Please enter name***';
  }
  document.getElementById('text').style.color = 'red';
  document.getElementById('text').innerHTML = Ename;

  const lname = document.getElementById('lname');
  if (lname.value === '') {
    Elastname = '***Please enter Lastname***';
  }
  document.getElementById('lerror').style.color = 'red';
  document.getElementById('lerror').innerHTML = Elastname;
});