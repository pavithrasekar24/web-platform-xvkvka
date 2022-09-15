console.log('*******validation**********');
let isFnameValid = false,
  isAgeValid = false,
  isEmailValid = false;
let handleFirstName = () => {
  let fname = document.forms['personForm']['fname'];
  console.log(fname, document.getElementById('fname'));
  if (fname.checkValidity()) {
    isFnameValid = true;
    document.getElementById('fnameError').innerText = '';
  } else {
    isFnameValid = false;
    document.getElementById('fnameError').innerText = fname.validationMessage;
  }
};

let handleAge = () => {
  let age = document.forms['personForm']['age'];
  console.log(age, document.getElementById('age'));
  if (age.checkValidity()) {
    isAgeValid = true;
    document.getElementById('ageError').innerText = '';
  } else {
    isAgeValid = false;
    document.getElementById('ageError').innerText = age.validationMessage;
  }
};

let handleEmail = () => {
  let email = document.forms['personForm']['email'];
  console.log(email, document.getElementById('email'));
  if (email.checkValidity()) {
    isEmailValid = true;
    document.getElementById('emailError').innerText = '';
  } else {
    isEmailValid = false;
    document.getElementById('emailError').innerText = email.validationMessage;
  }
};

let handleSubmit = () => {
  if (isFnameValid && isAgeValid && isEmailValid) {
    alert('form saved succesfully');
  } else {
    alert('failed');
  }
};
