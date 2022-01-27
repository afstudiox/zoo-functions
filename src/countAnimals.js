const data = require('../data/zoo_data');

const { species } = data;

const objectSpecie = () => species
  .reduce((acc, animal) => {
    const { name, residents } = animal;
    return { ...acc, [name]: residents.length };
  }, {});

function countAnimals(animal) {
  if (!animal) {
    return objectSpecie();
  }

  if (animal.sex === undefined) {
    return species.find((animalSpecie) => animalSpecie.name === animal.specie).residents.length;
  }

  if (animal.specie && animal.sex !== undefined) {
    return species.find((animalSpecieSex) => animalSpecieSex.name === animal.specie).residents
      .filter((resident) => resident.sex === animal.sex).length;
  }
}

// console.log(countAnimals());
console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

module.exports = countAnimals;
