var mackley = {
  name: "Mackley",
  lastname: "Carmona",
  age: 18,
};

var luis = {
  name: "Luis Miguel",
  lastname: "velasquez",
  age: 18,
};

function showUppercaseName(persona) {
  console.log(persona.name.toLocaleUpperCase());
}

console.log(" ------ showUppercaseName -----");
showUppercaseName(mackley);
showUppercaseName(luis);
showUppercaseName({ name: "Julio" });

/* Restructuración */
function showUppercaseNameRestructure(people) {
  // var name = persona.name
  var { name } = people;
  console.log(name);
}

console.log(" ------ showUppercaseNameRestructure -----");
showUppercaseNameRestructure(mackley);
showUppercaseNameRestructure(luis);

/* Reto Imprimir nombre y edad*/
function showNameAndAge(people) {
  var { name, age } = people;
  console.log(`Hola, me llamo ${name} y tengo ${age} años`);
}

console.log(" ------ showNameAndAge -----");
showNameAndAge(mackley);
showNameAndAge(luis);

function birthday(people) {
  var { age } = people;
  age += 1;
  return {
    ...people,
    age: age,
  };
}

console.log(" ------ birthday -----");
console.log(birthday(mackley));
console.log(birthday(luis));
