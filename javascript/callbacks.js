/* Params requests */
const API_URL = "https://swapi.dev/api/";
const options = { crossDomain: true };

/* Paths */
const PEOPLE_PATH = "people/:id";

var character = Math.random() * 10 + 1;
character = Math.round(character);

function getCharcter(id, callback) {
  var finalUrl = `${API_URL}${PEOPLE_PATH.replace(":id", id)}`;
  $.get(finalUrl, options, callback).fail(() => {
    console.error("Error al obtener el porsonaje con id: " + id);
  });
}

getCharcter(1, function (person) {
  console.log(`Hola! Soy ${person.name}`);

  getCharcter(2, function (person) {
    console.log(`Hola! Soy ${person.name}`);

    getCharcter(3, function (person) {
      console.log(`Hola! Soy ${person.name}`);

      getCharcter(4, function (person) {
        console.log(`Hola! Soy ${person.name}`);

        getCharcter(5, function (person) {
          console.log(`Hola! Soy ${person.name}`);

          getCharcter(6, function (person) {
            console.log(`Hola! Soy ${person.name}`);

            getCharcter(7, function (person) {
              console.log(`Hola! Soy ${person.name}`);

              getCharcter(8, function (person) {
                console.log(`Hola! Soy ${person.name}`);
              });
            });
          });
        });
      });
    });
  });
});
