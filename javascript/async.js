/* Params requests */
const API_URL = "https://swapi.dev/api/";
const options = { crossDomain: true };

/* Paths */
const PEOPLE_PATH = "people/:id";

var character = Math.random() * 10 + 1;
character = Math.round(character);

function getCharacter(id) {
  return new Promise((resolve, reject) => {
    var finalUrl = `${API_URL}${PEOPLE_PATH.replace(":id", id)}`;
    $.get(finalUrl, options, function (data) {
      resolve(data);
    }).fail(() => {
      reject("Error al obtener el porsonaje con id: " + id);
    });
  });
}

const onError = (error) => {
  console.error(error);
};

async function getCharacters() {
  var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var promises = ids.map((id) => getCharacter(id));
  try {
    var persons = await Promise.all(promises);
    persons.forEach((person) => console.log(`Hola! Soy ${person.name}`));
  } catch (id) {
    onError("Error al obtener el porsonaje con id: " + id);
  }
}

getCharacters();
