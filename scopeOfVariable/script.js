//functionlity
var greeting = 'hello';
console.log(greeting);
function scopeOfVariable() {
  let age = 90;
  if (true) {
    let age = 23;
    const place = 'chennai';
    const addr = {
      place: 'chennai',
    };
    addr.place = 'madurai';
    var data = 'welcome user';
    // place = 'madurai'; can't change for const variable
    console.log('inside if', data, age, addr.place); //
  }
  console.log('outside if inside funct', data, age); //
}
scopeOfVariable();
// console.log('outside fun', data); //can't access
