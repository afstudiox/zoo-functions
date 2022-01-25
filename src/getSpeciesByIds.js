const data = require('../data/zoo_data');
const matchSpecie = [];

function getSpeciesByIds(...ids) {
  // verifica se o array esta vazio e retorna "[]" caso positivo
  if (ids.length === 0) {
    return [];
  }

  if (ids.length === 1) {
    const findOneID = data.species.find((item) => item.id === ids[0]);
    return [findOneID];
  }

  if (ids.length > 1) {
    ids.forEach((id) => {
      matchSpecie.push(data.species.find((item) => item.id === id));
    });
    return matchSpecie;
  }

}

// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'));

module.exports = getSpeciesByIds;
