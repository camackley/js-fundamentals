/* Params requests */
const API_URL = "https://swapi.dev/api/";
const options = { crossDomain: true };

/* Paths */
const PEOPLE_PATH = "people/:id";

var character = Math.random() * 10 + 1;
character = Math.round(character);

function getCharcter(id) {
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

var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var promises = ids.map((id) => getCharcter(id));
Promise.all(promises)
  .then((persons) => {
    persons.forEach((person) => console.log(`Hola! Soy ${person.name}`));
  })
  .catch(onError);
