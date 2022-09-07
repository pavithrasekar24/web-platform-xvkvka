function handleSum() {
  console.log('added');
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

//anomous function  -> w/o functionName
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
