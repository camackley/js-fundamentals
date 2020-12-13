class People {
  constructor(name, lastname, age) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  getCompleteName() {
    return this.name + " " + this.lastname;
  }

  greet = function (fn) {
    var { name, lastname } = this;
    console.log("Hola! Me llamo " + name);
    if (fn) {
      fn(name, lastname, false);
    }
  };

  isAdult = function () {
    return this.age >= AGE_ADULT;
  };

  meet = function () {
    return this;
  };
}

class Developer extends People {
  constructor(name, lastname, age) {
    super(name, lastname, age);
  }

  greet = function (fn) {
    var { name, lastname } = this;
    console.log(
      "Hola! Me llamo " +
        name +
        " " +
        lastname +
        ", soy desarrollador de Software"
    );
    if (fn) {
      fn(name, lastname, true);
    }
  };
}

function answerGreet(name, lastname, isDev) {
  console.log(`Buen día ${name} ${lastname}, un gusto conocerte`);

  if (isDev) {
    console.log("Genial que seas desarollador");
  }
}

var Mackley = new Developer("Mackley", "Carmona Alvarez", 18);
var Kianna = new People("Kianna McGlynn", "Grimes", 80);
var Herminio = new People("Herminio Daniel", "Reichel", 12);
var Berta = new People("Berta Dicki", "Orn", 75);
var Frieda = new Developer("Frieda Brown", "Altenwerth", 17);

Mackley.greet(answerGreet);
console.log("--------------------------------");
Kianna.greet(answerGreet);
