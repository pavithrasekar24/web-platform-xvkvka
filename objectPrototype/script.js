//before es5
// function Store(name, place) {
//   this.name = name;
//   this.place = place;
// }

// after es5
class Store {
  constructor(name, place) {
    this.name = name;
    this.place = place;
  }
}
//property -country
Store.country = 'india';

const superMarket = new Store('relianceFresh', 'velachery');
const shoppingmall = new Store('Saravana', 'tnager');

// for object  we can add additional  property
// superMarket.country = 'india';
// shoppingmall.country = 'india';

console.log('hiii', superMarket.name, shoppingmall.name);
console.log(
  'adding property to an function',
  superMarket.country,
  shoppingmall.country
);
// using prototype -> allows you to add new property/ methods to constructor
Store.prototype.state = 'TN';
console.log(
  'adding property to an function using prototype',
  superMarket.state,
  shoppingmall.state
);
//before ec5
Store.prototype.displayDetails = function () {
  return this.name + ' ' + this.place;
};

// trail & error
// Store.prototype.displayDetails = () => {
//   return this.name + ' ' + this.place;
// };
console.log(
  'adding methods to an function using prototype',
  superMarket.displayDetails()
);

console.log(
  'adding methods to an function using prototype',
  shoppingmall.displayDetails()
);
