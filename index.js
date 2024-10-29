const form = document.getElementById('createAccountForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordCheck = document.getElementById('passwordCheck');

function showError(input, message) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector('small');
  small.textContent = message;
  small.classList.add('error-message');
  small.style.display = 'block';
  input.classList.add('invalid');
  input.classList.remove('valid');
}

function showSuccess(input, message) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector('small');
  small.textContent = message;
  small.classList.add('success-message');
  small.style.display = 'block';
  input.classList.add('valid');
  input.classList.remove('invalid');
}

function validateUsername() {
  if (username.value.trim() === '') {
    showError(username, 'username must be at least 20 characters');
  } else {
    showSuccess(username, 'Looks good!');
  }
}

function validateEmail() {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email.value.trim() === '') {
    showError(email, 'Email cannot be blank');
  } else if (!emailPattern.test(email.value.trim())) {
    showError(email, 'Please enter a valid email');
  } else {
    showSuccess(email, 'Looks good!');
  }
}

function validatePassword() {
  if (password.value.trim().length < 6) {
    showError(password, 'Password must be at least 6 characters');
  } else {
    showSuccess(password, 'Looks good!');
  }
}

function validatePasswordCheck() {
  if (passwordCheck.value.trim() === '') {
    showError(passwordCheck, 'Please confirm your password');
  } else if (password.value.trim() !== passwordCheck.value.trim()) {
    showError(passwordCheck, 'Passwords do not match');
  } else {
    showSuccess(passwordCheck, 'Passwords match');
  }
}

function validateForm() {
  validateUsername();
  validateEmail();
  validatePassword();
  validatePasswordCheck();

  // Return false to prevent form submission if there are errors
  const inputs = [username, email, password, passwordCheck];
  const isValid = inputs.every((input) => input.classList.contains('valid'));
  return isValid;
}

username.addEventListener('input', validateUsername);
email.addEventListener('input', validateEmail);
password.addEventListener('input', validatePassword);
passwordCheck.addEventListener('input', validatePasswordCheck);


function alertMessage() {
    const { usernameErr, emailErr, phonenumberErr, passwordErr, confirmpasswordErr } = this.errorValues;
  
    if (
      usernameErr === "" &&
      emailErr === "" &&
      phonenumberErr === "" &&
      passwordErr === "" &&
      confirmpasswordErr === ""
    ) {
      swal("Registration Successful", "Thank you, " + this.formValues.username, "success");
  
      
    }
  }
  