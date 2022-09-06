let fname = 'ureka';
let person = {
  fname: 'ram',
  lname: 'kumar',
  mobile: '+90687687',
};
let handleSet = () => {
  localStorage.setItem('uname', fname);
  localStorage.setItem('person', JSON.stringify(person));
  sessionStorage.setItem('age', 20);
  sessionStorage.setItem('person', person);
};
let handleRemove = () => {
  localStorage.removeItem('uname');
};

let handleGet = () => {
  let person = JSON.parse(localStorage.getItem('person'));
  console.log(person);
};
let handleClear = () => {
  sessionStorage.clear();
};
