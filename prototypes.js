const AGE_ADULT = 18;

function extendsOf(prototypeSon, prototypeParent) {
  var fn = function () {};
  fn.prototype = prototypeParent.prototype;
  prototypeSon.prototype = new fn();
  prototypeSon.prototype.constructor = prototypeSon;
}

function People(name, lastname, age) {
  this.name = name;
  this.lastname = lastname;
  this.age = age;
}

People.prototype.getCompleteName = function () {
  return this.name + " " + this.lastname;
};

People.prototype.greet = function () {
  console.log("Hola! Me llamo " + this.name);
};

People.prototype.isAdult = function () {
  return this.age >= AGE_ADULT;
};

People.prototype.meet = function () {
  return this;
};

/* Prototipos Heredados */
function Developer(name, lastname, age) {
  this.name = name;
  this.lastname = lastname;
  this.age = age;
}

extendsOf(Developer, People);

Developer.prototype.greet = function () {
  console.log(
    "Hola! Me llamo " +
      this.name +
      " " +
      this.lastname +
      ", soy desarrollador de Software"
  );
};

var Mackley = new Developer("Mackley", "Carmona Alvarez", 18);
var Kianna = new People("Kianna McGlynn", "Grimes", 80);
var Herminio = new People("Herminio Daniel", "Reichel", 12);
var Berta = new People("Berta Dicki", "Orn", 75);
var Frieda = new Developer("Frieda Brown", "Altenwerth", 17);
