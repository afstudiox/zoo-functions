const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(peoples) {
  const child = peoples.filter((element) => element.age < 18);
  const adult = peoples.filter((element) => element.age >= 18 && element.age < 50);
  const senior = peoples.filter((element) => element.age >= 50);
  const tableAge = {
    adult: adult.length,
    child: child.length,
    senior: senior.length,
  };
  return tableAge;
}

function calculateEntry(peoples) {
  if (!peoples || Object.keys(peoples).length === 0) {
    return 0;
  }
  const [adult, child, senior] = Object.values(countEntrants(peoples));

  const entrantsValues = adult * prices.adult + child * prices.child + senior * prices.senior;
  return entrantsValues;
}

module.exports = { calculateEntry, countEntrants };
