/*Reference Types
 object -{} -JSON (javascript object notation) key:value pairs
 value -is type of any 
 key -is type of str 
 group of variables */

let person = {
  fname: 'ram',
  lname: 'kumar',
  mobile: '+90687687',
};

console.log('typeof person', person, typeof person);

//object access through keys
// dot operator -objName.key, square bracket-objName["key"]
console.log(person.fname.toUpperCase(), person['lname']);

console.log('keys of arr', Object.keys(person));
console.log('valu of arr', Object.values(person));
console.log('entries of arr', Object.entries(person));

console.log('*********iterating*******');
for (let k of Object.keys(person)) {
  console.log('key', k, person[k]);
}
for (let v of Object.values(person)) {
  console.log('value', v);
}

for (let [k, v] of Object.entries(person)) {
  console.log('key -value', k, v);
}

console.log('**************************');
// different group of datatype
//square brackets
//array -accessing through index
let ages = [89, 90, 24, 78, '67', {}, []];
//starting index 0
//length -3
let fruits = ['Apple', 'Orange', 'Pineapple'];
let persons = [
  {
    fname: 'ram',
    lname: 'kumar',
    mobile: '+90687687',
    age: 12,
  },
  {
    fname: 'ravi',
    lname: 'kumar',
    mobile: '+90687687',
    age: 67,
  },
  {
    fname: 'nisha',
    lname: 'noori',
    mobile: 475758697,
    age: 27,
  },
  {
    fname: 'vinoth',
    lname: 'kumar',
    mobile: 475758697,
    age: 21,
  },
];

//iterate
for (let i in fruits) {
  console.log('for in ', i, fruits[i]);
}
//for loop
//intialization, condn, inc/dec
for (let i = 0; i < persons.length; i++) {
  // console.log(persons[i], persons[i].fname);
  console.log('element -obj', persons[i]);
  let ele = Object.keys(persons[i]);
  // ["fname","lname","age"]
  for (let k of ele) {
    console.log('for loop', k, persons[i][k]);
  }
}
console.log('**********************************');

//array arrow function -ECMA 6
//foreach,filter,some,every,map,reduce
//forEach -iterating the array ele -parameter(each ele, index, array)
// () -more than one parameter else optional
persons.forEach((item, i, arr) => {
  console.log('for each persons', item, i, arr);
});
fruits.forEach((item) => {
  console.log('for each fruits', item);
});
console.log('**********************************');

//map -tranformation of data -(items)
//already existing modify & adding new item
//return new array
let modifyPersons = persons.map((item, i) => {
  return {
    id: i + 1,
    firstName: item.fname,
    isEligiblie: item.age > 18 ? true : false,
    fullName: item.fname + item.lname,
  };
});
console.log('map persons', modifyPersons, persons);
console.log('**********************************');

let modPersons = persons.map((item, i) => {
  return {
    id: i + 1,
    isEligiblie: item.age > 18 ? true : false,
    fname: item.fname,
    lname: item.lname,
    age: item.age,
    mobile: item.mobile,
  };
});

console.log('map persons existing data', modPersons, persons);
console.log('**********************************');

let company = [
  {
    name: 'HCL',
    count: 5000,
    address: { city: 'chennai', pincode: '57687897' },
    colors: ['blue', 'red'],
  },
  {
    name: 'Quartz',
    count: 250,
    address: { city: 'chennai', pincode: '57687897' },
    colors: ['blue', 'red'],
  },
];

let companyDetails = company.map((item, i) => {
  return {
    companyId: i + 1,
    stageLevel: item.count >= 5000 ? 'MNC' : 'Middle-level',
    ...item,
  };
});
console.log('map company spread operators', companyDetails, company);
console.log('**********************************');

//spread operator (...)
// value clone - one layer -workout
let language = ['python', 'java'];
// let fav_language = language; //memory copy
let fav_language = [...language];
fav_language[1] = 'Node Js';
console.log(language, fav_language);
console.log('**********************************');

//filter -> (condn satisfied true return value )for,if push
// let eligiblePerson = persons.filter((item) => {
//   return item.age >= 50;
// });
//single
let eligiblePerson = persons.filter((item) => item.lname[0] == 'n');
console.log('eligibilePerson', eligiblePerson);

//some -> array -> return true/false  -  anyone ele should satisfied the condn in array
//loginDetails 10000 oru person login sucess
//example search -> any column one filed match return value.
let loginDetails = [
  { id: 1, uname: 'abc', pwd: 'abc123' },
  { id: 2, uname: 'agent', pwd: 'agent123' },
  { id: 3, uname: 'admin', pwd: 'admin123' },
];
let checkLogin = loginDetails.some(
  (item) => item.uname == 'admin' && item.pwd == 'admin123'
);
console.log(checkLogin);
console.log('**********************************');

// every -opps some -  all ele should satisfied the condn in array -return true / false;
// input field all valid  -proceed

let validField = ['t', 't', 'f', 't', 't'];
let checkStatus = validField.every((item) => item == 't' || item == 'f');
console.log(checkStatus);
console.log('**********************************');

//reduce -> return single value -> arithmetric operation
//sumofnum, multiofnum, concat
let numbers = [9, 7, 6, 5];
let sum = numbers.reduce((prev, curr, i, arr) => {
  console.log(prev, curr, i, arr);
  return prev + curr;
});
console.log(sum);
console.log('**********************************');

//combination -filter -map
let personDetails = persons
  .filter((item) => item.age > 21)
  .map((data) => {
    return {
      ...data,
      isEligiblie: true,
    };
  });
console.log(personDetails);
console.log('**********************************');

//array methods
let names = ['nisha', 'vinoth'];
//push ->add last position -multiple
names.push('mani', 'ureka');
console.log('push', names);
console.log('**********************************');
//pop -remove -last posi elem - one ele
names.pop();
console.log('pop', names);
console.log('**********************************');
//shift - first pos remove -one ele
names.shift();
console.log('shift', names);
console.log('**********************************');
//unshift -> first pos add -multiple
names.unshift('arun', 'kaviya', 'ramya');
console.log('unshift', names);
console.log('**********************************');
//reverse ->ele reverse
names.reverse();
console.log('reverse', names);
console.log('**********************************');
//slice- extracting part
let extractPart = names.slice(0, 3);
console.log('slice', extractPart, names);
console.log('**********************************');
//splice - add & remove particular position (index)
//syntax: splice(startingIndex,deletecount,addele(optional))
names.splice(2, 0, 'pavithra', 'vasanthi');
console.log('addElem -splice', names);
names.splice(1, 2);
console.log('remove -splice', names);
names.splice(3, 1, 'sathiya', 'pragathi');
console.log('add & remove -splice', names);
//find
console.log(names.find((item) => item == 'sathiya'));
console.log('**********************************');

//findIndex
console.log(names.findIndex((item) => item == 'sathiya'));
console.log('**********************************');

//let numbers=[90,89,67,90,67]-duplicate removed
let selectedvalues = [90, 89, 67, 90, 67];
let result = [];
selectedvalues.forEach((item) => {
  console.log(item);
  let index = result.findIndex((r) => r == item);
  console.log(index);
  if (index == -1) {
    result.push(item);
  }
});
console.log(result);
console.log('**********************************');

// palindrome -madam ,-for loop-dec
// "developer" -> ["de","ve","lo","pe","r"]

let salary = 907878.667;
console.log(
  'salary',
  salary.toString(),
  'result',
  result.toString(), //str of array
  JSON.stringify(persons), //json of array -arr->str
  JSON.stringify(person) //json  obj ->str
);
console.log('**********************************');

// str->arr/obj
let strPerson = JSON.stringify(persons);
console.log('str ->arr', JSON.parse(strPerson));
//Number,parseInt,parseFloat,toFixed
console.log(
  'salary',
  salary,
  'number',
  'str ->num conversation Number()',
  Number('789.91'),
  'parseInt',
  parseInt(salary),
  'parseFloat',
  parseFloat(salary),
  'tofixed(0)',
  salary.toFixed(0),
  'tofixed(1)',
  salary.toFixed(1),
  'tofixed(2)',
  salary.toFixed(2)
);
console.log('**********************************');

// e-3
// 90/1000 =0.009
let tax = 9078;
console.log(tax.toPrecision(2));
let fax = 0.89;
console.log(fax.toExponential(1));
console.log(typeof Number('87987'));
console.log('2' + 2, '2' - 2, 2 + undefined, 2 + '', 2 + null);
// + concat(string)  return "22" , - number return 0
// String Methods
let greeting = 'Hello world good morning have a good day';
console.log(greeting.length, greeting[1]);
console.log(
  greeting.slice(0, 6),
  greeting.slice(0, -3),
  greeting.substring(0, 6)
);
console.log('**********************************');

console.log(greeting.replace('good', 'better'));
console.log(greeting.replace(/good/g, 'better'));
let fname = 'Ram kumar';
let role = 'Developer';
console.log(fname.replace(/ram/i, 'Vijay'));
console.log('**********************************');

let txt = fname.concat(' ', role, ' ', salary);
console.log(txt);
//trailing (end) & leading space (start)
let place = ' che   n   nai   ';
console.log('**********************************');

console.log(place.trim());
let trim_place = place.trim();
console.log(trim_place.replace(/ /g, ''));
// split  str -> arr
//spliter

let question = 'what is  ur name?Q.what is your age?Q.where is your place';
let questions = question.split('Q.');
console.log(questions);
console.log('**********************************');

// join  arr -> str
//delimiter
let fruitsArr = ['apple', 'orange', 'graphes'];
console.log(fruitsArr.join('-'));

console.log('**********************************');

console.log(greeting.indexOf('h'));
console.log(
  'index -letter',
  greeting.charAt(0),
  'ascii code',
  greeting.charCodeAt(25)
);
console.log(
  greeting.toLowerCase(),
  greeting.toUpperCase(),
  greeting.endsWith('day'),
  greeting.includes('oe')
);

console.log('**********************************');
//destructing -ECMA6
let admin = {
  address: {
    city: 'chennai',
    pincode: '79857',
  },
};

console.log(admin.address.city, admin.address.pincode);

// structuring
// let city = admin.address.city;
// let pincode = admin.address.pincode;

let { city, pincode } = admin.address; //destructuring

console.log(city, pincode);
