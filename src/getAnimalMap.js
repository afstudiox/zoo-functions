const data = require('../data/zoo_data');

const { species } = data;

const allAnimalsbyLocation = (locale) => {
  const result = species
    .filter((local) => local.location === locale).map((item) => item.name);
  return result;
};

const allAnimals = () => {
  const location = Object.values(species).map((item) => item.location);
  return location.reduce((acc, sigla) => {
    acc[sigla] = allAnimalsbyLocation(sigla);
    return acc;
  }, {});
};

const getAnimalMap = (options) => {
  const verifyParam = options;
  if (!verifyParam) {
    return allAnimals();
  }
};

console.log(getAnimalMap());

module.exports = getAnimalMap;
