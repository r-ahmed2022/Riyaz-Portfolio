const form = document.getElementById('form-1');
const email = document.getElementById('email-field');
const lname = document.getElementById('lname');
const validateEmail = () => {
  if (email.value !== email.value.toLowerCase()) {
    const inputControl = email.parentElement.nextElementSibling;
    inputControl.classList.add('error');
    const displayError = document.getElementById('errorMsg');
    displayError.innerHTML = 'Email should be only in Lower Case';
    return false;
  }
  return true;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.stopPropagation();
  if (validateEmail()) {
    lname.attributes.required = false;
    form.submit();
  }
});