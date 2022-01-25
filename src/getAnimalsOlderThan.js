const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const nameSearch = data.species.find((item) => item.name === animal);
  const ageFilter = Object.values(nameSearch.residents).every((item2) => item2.age >= age);
  return ageFilter;
}

module.exports = getAnimalsOlderThan;
