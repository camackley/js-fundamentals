var mackley = {
  name: "Mackley",
  lastname: "Carmona",
  age: 18,
  isEngieniering: false,
  isDeveloper: true,
  isDj: false,
  isCool: true,
};

function showProfesions(people) {
  result = "";
  result += `${people.name}:`;

  if (people.isEngieniering) {
    result += "\nEs Ingeniero";
  } else {
    result += "\nNo es Ingeniero";
  }

  if (people.isDeveloper) {
    result += "\nEs Desarrollador";
  } else {
    result += "\nNo es Desarrollador";
  }

  if (people.isDj) {
    result += "\nEs Dj";
  } else {
    result += "\nNo es Dj";
  }

  if (people.isCool) {
    result += "\nEs Genial";
  } else {
    result += "\nNo es Genial";
  }

  console.log(result);
}

/* Ejercicio es mayor de edad */
function isAdult(people) {
  if (people.age >= 18) {
    console.log(`${people.name} ES mayor de edad`);
  } else {
    console.log(`${people.name} NO ES mayor de edad`);
  }
}

/* Switch */
var signo = prompt("¿Cual es tu signo?").toLowerCase();

const horoscopos = {
  aries: "21 marzo - 19 abril",
  tauro: "20 abril - 20 mayo",
  geminis: "21 mayo - 20 junio",
  cancer: "21 junio - 22 julio",
  leo: "23 julio - 22 agosto",
  virgo: "23 agosto - 22 septiembre",
  libra: "23 septiembre - 22 octubre",
  escorpion: "23 octubre - 21 noviembre",
  sagitario: "22 noviembre - 21 diciembre",
  capricornio: "22 diciember - 19 enero",
  acuario: "20 enero - 18 febrero",
  piscis: "19 febrero - 20 marzo",
};

switch (signo) {
  case "aries":
    alert(horoscopos.aries);
    break;
  case "tauro":
    alert(horoscopos.tauro);
    break;
  case "geminis":
  case "géminis":
    alert(horoscopos.geminis);
    break;
  case "cancer":
  case "cáncer":
    alert(horoscopos.cancer);
    break;
  case "leo":
    alert(horoscopos.leo);
    break;
  case "virgo":
    alert(horoscopos.virgo);
    break;
  case "libra":
    alert(horoscopos.libra);
    break;
  case "escorpion":
  case "escorpión":
    alert(horoscopos.escorpion);
    break;
  case "sagitario":
    alert(horoscopos.sagitario);
    break;
  case "capricornio":
    alert(horoscopos.capricornio);
    break;
  case "acuario":
    alert(horoscopos.acuario);
    break;
  case "piscis":
    alert(horoscopos.piscis);
    break;

  default:
    alert(`No se encontro infromacion de tu signo "${signo}"`);
    break;
}
