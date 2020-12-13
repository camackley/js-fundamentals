var nameC = "Mackley";
var ageC = 18;

function showAge() {
  console.log(`${nameC} tiene ${ageC} años`);
}

function showAgeWithparams(nameP, ageP) {
  console.log(`${nameP} tiene ${ageP} años`);
}

showAge();
showAgeWithparams("Mariana", 21);

/* Alcance de las funciones */
console.log("---------- Alcance de las funciones ------------");
function showUppercaseName(name) {
  name = name.toLocaleUpperCase();
  console.log(name);
}

showUppercaseName(nameC);

/* Arrow Functions */
console.log("---------- Funciones de flecha ------------");

var mackley = {
  name: "Mackley",
  lastname: "Carmona",
  age: 18,
};

const AGE_FOR_BE_ADULT = 18;

//Funcion declarativa
const isAdult = ({ age }) => age >= AGE_FOR_BE_ADULT;

function showIfIsAdult(people) {
  if (isAdult(people)) {
    console.log(`${people.name} ES mayor de edad`);
  } else {
    console.log(`${people.name} NO ES mayor de edad`);
  }
}

const accessGaranted = (people) =>
  !isAdult(people)
    ? console.log("ACCESS DENIED")
    : console.log("ACCESS GARANTED");

showIfIsAdult(mackley);
accessGaranted(mackley);
