// let i = 0;
let i = 2;
while (i < 2) {
  console.log('while loop', i);
  i++;
}

let j = 2;
do {
  console.log('do loop', j);
  j++;
} while (j < 2);

let day = new Date().getDay();
// let day = 9;
//0 -> sun 1-mon , 2-tuesday ,3...  6->saturday

switch (day) {
  case 0:
    console.log('sunday');
    break;
  case 1:
    console.log('monday');
    break;
  case 2:
    console.log('tuesday');
    break;
  case 3:
    console.log('wednesday');
    break;
  case 4:
    console.log('thursday');
    break;
  case 5:
    console.log('friday');
    break;
  case 6:
    console.log('saturday');
    break;
  default:
    console.log('invalid day');
}

//if
// let age = 12;

//else if
// let age =21

// else
let age = 'abc';
if (age < 18) {
  console.log('child');
} else if (age > 18 && age <= 21) {
  console.log('adult');
} else if (age > 21) {
  console.log('senior');
} else {
  console.log('NAN -different datatype', age > 21);
}

//ternary
//condn ? expr :expr2;
let ctc = 500000;
let isEligible = ctc > 300000;
console.log(isEligible);

let taxStatus = ctc > 300000 ? 'tax payable' : 'no tax';
console.log(taxStatus);

a = 22;
let ageStatus = a < 18 ? 'child' : a >= 18 && a <= 21 ? 'adult' : 'senior';
// condn1 ? exp1 : condn2? exp1:expr2
console.log(ageStatus);

console.log('== value, === value +datatype', 2 == '2', 2 === 2, 2 === '2');

//assignment operator
let z = 9;
z *= 2;

// post increment / decrement
let x = 8;
x--;

//pre increment / decrement
let y = 7;
++y;
console.log(z, x, y);
