///////////////////////////////////////// How to Define a JavaScript Object /////////////////////////////////////////////
// Using an Object Literal
let person = {
  name: 'Aya',
  age: 25,
  sayHello: function() {
    console.log(`Hello I'm ${this.name}`);
  }
};
console.log(person.name); // dot notation
console.log(person["name"]); //Bracket notation
person.sayHello(); // Hello I'm Aya

// Using the new Keyword
let car = new Object();
car.brand = 'Toyota';
car.model = '2024';
car.drive = function() {
console.log('The car is moving');
};

car.drive(); // The car is moving

// with creat
let product = {
  inStock: false,
  price: 100,
  checkAvailability: function() {
    return `product ${this.inStock ? "available" : ""} and price ${this.price} pounds`;
  }
};

console.log(product.checkAvailability()); 

let specialProduct = Object.create(product);
specialProduct.inStock = true;
specialProduct.price = 150;

console.log(specialProduct.checkAvailability()); 

// Using an Object Constructor

function Person(name, age) {
  this.name = name;
  this.age = age + 10;
  this.sayHello = function() {
    console.log(`Hello I'm ${this.name}`);
  };
}

let person1 = new Person('ahmed', 30);
person1.sayHello(); // Hello I'm ahmed



///////////////////////////////////////// Classes /////////////////////////////////////////////

// Use the keyword class to create a class.
// Always add a method named constructor():

class Car {
  constructor(brand, model, year) {
    this.brand = brand;  
    this.model = model;  
    this.year = year;  
    this.isEngineOn = false; 
  }

  displayInfo() {
    console.log(` car brand is ${this.brand} , model is  ${this.model} and the year mead is ${this.year}`);
  }

  startEngine() {
    this.isEngineOn = true;
    console.log("The motor is running now !");
  }

  stopEngine() {
    this.isEngineOn = false;
    console.log("The motor is stopped now.");
  }
}

let myCar = new Car("Toyota", "Corolla", 2024);

myCar.displayInfo(); 

myCar.startEngine();  //The motor is running now !

myCar.stopEngine();  // The motor is stopped now.



///////////////////////////////////////// Inheritance /////////////////////////////////////////////

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`my name is ${this.name} and my age is ${this.age} years.`);
  }
}

class Student extends User {
  constructor(name, age, grade) {
    super(name, age);  
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} study for exams`);
  }

  introduce() {
    super.introduce(); 
    console.log(`I'm astudent in grade ${this.grade}.`);
  }
}

let student1 = new Student("Ali", 20, "3rd Year");
student1.introduce();  
student1.study();     



///////////////////////////////////////// Polymorphism /////////////////////////////////////////////

// Parent class
class Animal {
  speak() {
    console.log("The animal is speaking");
  }
}

// Child class 1
class Dog extends Animal {
  speak() {
    console.log("The dog says woof woof");
  }
}

// Child class 2
class Cat extends Animal {
  speak() {
    console.log("The cat says meow");
  }
}

// Creating objects from the classes
let myDog = new Dog();
let myCat = new Cat();

// Here the objects call the same speak method, but the implementation will differ based on the type of object
myDog.speak();  // Output: "The dog says woof woof"
myCat.speak();  // Output: "The cat says meow"


///////////////////////////////////////// Encapsulation /////////////////////////////////////////////

class Persons {
  #name;

  constructor(name, age) {
    this.#name = name;  
    this.age = age;   
  }

  getName() {
    return this.#name;
  }

  setName(newName) {
    this.#name = newName;
  }

  displayInfo() {
    console.log(`Name: ${this.getName()}, Age: ${this.age}`);
  }
}

const person11 = new Persons("Ali", 25);

person11.age = 30;
console.log(person11.age);  

// console.log(person1.#name);  //   Private field '#name' 

person11.displayInfo();  //   "Name: Ali, Age: 30"

person11.setName("Ahmed");
person11.displayInfo();  //  : "Name: Ahmed, Age: 30"



///////////////////////////////////////// Abstract /////////////////////////////////////////////

class CoffeeMachine {
brewCoffee() {
  this.grindBeans(); 
  this.boilWater();   
  this.pourInCup();    
}

grindBeans() {
  console.log("Grinding the coffee beans...");
}

boilWater() {
  console.log("Boiling the water...");
}

pourInCup() {
  console.log("Pouring the coffee into the cup...");
}
}
const coffeeMachine = new CoffeeMachine();
coffeeMachine.brewCoffee(); 