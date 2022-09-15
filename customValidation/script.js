let isUserValid = false,
  isPwdValid = false;
let username = document.forms['userForm']['username'];

let handleUser = () => {
  let userError = document.getElementById('userError');
  console.log(username, userError);
  if (username.value == '') {
    isUserValid = false;
    userError.innerText = 'UserName is required';
  } else if (username.value.length < 8) {
    isUserValid = false;
    userError.innerHTML = 'UserName should have alteast 8 character';
  } else {
    isUserValid = true;
    userError.innerHTML = '';
  }
};

let handlePwd = () => {
  let password = document.forms['userForm']['password'];
  let pwdError = document.getElementById('pwdError');
  let regex =
    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/;
  if (password.value == '') {
    isPwdValid = false;
    pwdError.innerText = 'Password is required';
  } else if (!regex.test(password.value)) {
    isPwdValid = false;
    pwdError.innerHTML =
      'password should have alteast 8 character, 1 upper, 1 lower , 1 number';
  } else {
    isPwdValid = true;
    pwdError.innerHTML = '';
  }
};

let handleSubmit = () => {
  handleUser();
  handlePwd();
  if (isUserValid && isPwdValid) {
    alert(username.value + ' saved succesfully');
    document.forms['userForm'].reset();
  } else {
    alert('failure');
  }
};
