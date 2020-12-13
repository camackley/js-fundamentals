var mackley = {
  name: "Mackley",
  lastname: "Carmona",
  age: 18,
  weight: 75,
};

console.log(`Al inico del año ${mackley.name} pesa ${mackley.weight} KG`);

const CHANGE_WEIGHT = 0.3;
const YEAR_DAYS = 365;

const gainWeight = (people) => (people.weight += CHANGE_WEIGHT);
const loseWeight = (people) => (people.weight -= CHANGE_WEIGHT);

const eatMuch = () => Math.random() < 0.4;
const doSport = () => Math.random() < 0.3;

for (let i = 0; i <= YEAR_DAYS; i++) {
  var random = Math.random();
  if (random < 0.25) {
    gainWeight(mackley);
  } else if (random > 0.5) {
    loseWeight(mackley);
  }
}

console.log(
  `Al final del año ${mackley.name} pesa ${mackley.weight.toFixed(1)} KG`
);

console.log("---------------- Hasta llegar a una meta ---------------- ");
const GOAL_WEIGHT = mackley.weight + 5;
var days = 0;

while (mackley.weight < GOAL_WEIGHT) {
  if (eatMuch()) {
    gainWeight(mackley);
  } else if (doSport()) {
    loseWeight(mackley);
  }
  days += 1;
}

console.log(
  `${mackley.name} en ${days} dias logró llegar a su meta de ${GOAL_WEIGHT} KG`
);

console.log("---------------- Do While ---------------- ");
var i = 0;

const llueve = () => Math.random() < 0.25;

do {
  i++;
} while (!llueve());

console.log(`Fui a ver si llovia ${i} ${i === 1 ? "ves" : "veces"}`);
