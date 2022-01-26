const data = require('../data/zoo_data');

function isManager(id) {
  const searchManager = data.employees.some((element) => element.managers.includes(id));
  return searchManager;
}

// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const filterManager = data.employees.filter((element) => element.managers.includes(managerId));
    return filterManager.map((name) => `${name.firstName} ${name.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
