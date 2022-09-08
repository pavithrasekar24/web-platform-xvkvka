function handleSum() {
  console.log('added');
  window.alert('hii');
}

//(x,y) ->arguments
let x = 17,
  y = 8;

handleSub(x, y);

//function with parameter(a,b)
function handleSub(a, b) {
  console.log(a - b);
}

let multiple = function () {
  console.log(5 * 7);
};

multiple();

let dividerMethod = function (a, b) {
  return a / b;
};

let value = dividerMethod(x, y);
console.log(value);

let total = (a, b) => {
  console.log('totaled', a + b);
};

total(x, y);

//spread (...)
// rest operator -last param(...) -> function parameter ( n of values passing)
let noOfNumbers = (result, ...n) => {
  console.log(n.length);
  n.forEach((item) => (result += item));
  console.log('result -rest operator', result);
};
noOfNumbers(0, 1, 2, 3, 4, 5, 7, 8);

//anonymous function  -> w/o functionName
//self exectued function
//ex1
(function () {
  console.log('self executed function');
})();
//ex2
let person = {
  fname: 'John',
  lname: 'Peter',
  fullName: function () {
    return this.fname + ' ' + this.lname;
  },
};
console.log(person.fname, person.fullName());

// default parameter -> if its pass args it will take that value else deafult value
let displayMessage = (name, msg = 'Hai Gm') => {
  console.log(name + ' ' + msg);
};

displayMessage('Peter', 'GE');
displayMessage('Peter');

//this  refers to object -> global object ->current instance
class Store {
  constructor(age) {
    this.age = age;
  }
  // age = 26;
  getAge() {
    console.log('age::', this.age);
  }
}
let s = new Store(26);
let p = new Store(24);

console.log(s.age, p.age);
s.getAge();
p.getAge();
console.log(this);
console.log(window.location);
