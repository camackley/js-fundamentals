var Carlo = {
  name: "Carlo Anderson",
  lastname: "Davis",
  heigth: 1.77,
  totalBook: 10,
};

var Victor = {
  name: "Victor Fritz",
  lastname: "Stokes",
  heigth: 1.85,
  totalBook: 15,
};

var Letha = {
  name: "Letha Sipes",
  lastname: "Watsica",
  heigth: 1.8,
  totalBook: 7,
};

var people = [Carlo, Victor, Letha];

const isHeigth = ({ heigth }) => heigth >= 1.8;
const isShort = ({ heigth }) => heigth < 1.8;

var moreHeigthPeople = people.filter(isHeigth);
var shortPeople = people.filter(isShort);

console.log(moreHeigthPeople);
console.log(shortPeople);

/* Transformar arrays */
console.log("----- Transformar arrays ----------");

const convertHeigth = (people) => ({
  ...people,
  heigth: people.heigth * 100,
});

var peopleCms = people.map(convertHeigth);
console.log(peopleCms);

/* Reducer */
console.log("----- Reducer ----------");
const reducer = (acum, people) => acum + people.totalBook;

var totalBooks = people.reduce(reducer, 0);
console.log(totalBooks);
