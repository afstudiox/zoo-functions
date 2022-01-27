const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const firstSpecie = employees.find((item) => item.id === id).responsibleFor[0];
  const arraySpecie = species.find((item) => item.id === firstSpecie)
    .residents.sort((a, b) => b.age - a.age)[0];
  // return [arraySpecie.name, arraySpecie.sex, arraySpecie.age];
  return Object.values(arraySpecie);
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
