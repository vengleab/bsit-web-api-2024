class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const p1 = new Person("Vengleab");
// p1.sayHello();
p1.sayHello = function () {
  console.log(`test`);
}
p1.sayHello();

const person = {
  name: "Vengleab",
  sayHello: function () {
    console.log(`Hello, I'm ${this.name}`);
  },
};