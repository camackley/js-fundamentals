var nameC = "Trent Raynor";
var lastname = "Gleason";
var jobType = "Manager";

var nameUpperCase = nameC.toUpperCase();
var lastnameLowerCase = lastname.toLowerCase();

var fisrtCharName = nameC.charAt(0);
var lengthLastName = lastname.length;

var completeName = nameC + " " + lastname;
var completeName = `${nameC} ${lastname}`;

var str = nameC.substr(1, 3);

var nameC = "Trent Raynor";

/* Ejercicio encontrar la letra en el nombre */
var charToFind = "T".toLowerCase();
var nameLoweCase = nameC.toLowerCase();
var positionsOfChar = [];
for (var i = 0; i < nameC.length; i++) {
  if (nameLoweCase.charAt(i) == charToFind) {
    positionsOfChar.push(i);
  }
}
console.log(
  `El caracter "${charToFind}" en el nombre "${nameC}", esta ${positionsOfChar.length} veces, en las posiciones ${positionsOfChar}`
);

/* Ejercicio encontrar la ultima letra en el nombre */
lastChar = nameC.charAt(nameC.length - 1);
console.log(`El ultimo Carater del nombre es "${lastChar}"`);

//console.log("Hola " + nameC + " " + lastname + ". \nTienes " + age + " años");
