class Parent {
  constructor(place) {
    this.place = place;
  }

  display() {
    return 'My Native Place is ' + this.place;
  }

  static myName(name) {
    return 'Name is' + name;
  }
}

let p = new Parent('Chennai');
console.log(
  'parent class',
  '****',
  p.place,
  '****',
  p.display(),
  '****',
  Parent.myName('Vannasa')
);

class Child extends Parent {
  constructor(place, district) {
    super(place);
    this.district = district;
  }
  show() {
    return this.place + ' ' + this.district;
  }
}
let c = new Child('Pattukottai', 'Thanjavur');
console.log('child class ****', c.show());
console.log('child class parent methods display ***', c.display());
console.log(
  'child class parent properties ***',
  c.place,
  Parent.myName('Richard')
);
