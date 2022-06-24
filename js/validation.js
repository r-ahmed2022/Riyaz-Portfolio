/* eslint-disable no-unused-vars */
const form = document.getElementById('form-1');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email-field');
const comments = document.getElementById('comments');

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.errorMsg');
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

let counter = 0;

const validateForm = () => {
  const firstname = fname.value.trim();
  const lastname = lname.value.trim();
  const emailField = email.value.trim();
  const commentValue = comments.value.trim();

  if (firstname === '') {
    setError(fname, 'first name is required');
    return;
  } if (firstname.split('').length > 30) {
    setError(fname, 'first name should not exceed 30 characters');
    return;
  }
  setSuccess(fname);
  counter += 1;

  if (lastname === '') {
    setError(lname, 'last name is required');
    return;
  } if (lastname.split('').length > 30) {
    setError(lname, 'last name should not exceed 30 characters');
    return;
  }
  setSuccess(lname);
  counter += 1;

  if (emailField === '') {
    setError(email, 'Email is required');
    return;
  } if (emailField !== emailField.toLowerCase()) {
    setError(email, 'Email should be in lowercase');
    return;
  }
  setSuccess(email);
  counter += 1;

  // for message validation
  if (commentValue === '') {
    setError(comments, 'Please add a message');
  } else if (commentValue.split('').length > 500) {
    setError(comments, 'Message should be short and do not exceed 500 characters');
  } else {
    setSuccess(comments);
    counter += 1;
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.stopPropagation();
  validateForm();
  if (counter >= 3) {
    form.submit();
  } else {
    counter = 0;
  }
});