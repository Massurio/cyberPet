class Animal {
  constructor(fname, sname, age) {
    this._fname = fname;
    this._sname = sname;
    this.age = age;
  }

  hunger = 10;
  thirst = 10;
  energy = 10;
  health = 10;

  get name() {
    return `${this._fname} ${this._sname}`;
  }

  eat() {
    this.hunger--;
  }

  birthday() {
    this.age++;
  }
}

class Bunny extends Animal {
  constructor(fname, sname, age) {
    super(fname, sname, age);
  }

  hops = 0;

  increaseHops() {
    this.hops++;
  }
}

class Cat extends Animal {
  constructor(fname, sname, age) {
    super(fname, sname, age);
  }

  naps = 0;

  increaseNaps() {
    this.naps++;
  }
}

let sherlock = new Bunny('Sherlock', 'Holmes', 2);
let mycroft = new Bunny('Mycroft', 'Holmes', 3);
let enola = new Bunny('Enola', 'Holmes', 1);
let wiggles = new Cat('Mr', 'Wiggles', 1);

wiggles.eat();
wiggles.eat();
wiggles.eat();

console.log([enola, wiggles]);
