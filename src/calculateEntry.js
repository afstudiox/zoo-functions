const data = require('../data/zoo_data');

const { prices } = data;

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
