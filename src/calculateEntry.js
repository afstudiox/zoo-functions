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
    child: child.length,
    adult: adult.length,
    senior: senior.length,
  };
  return tableAge;
}

function calculateEntry(peoples) {
  if (!peoples || Object.keys(peoples).length === 0) {
    return 0;
  }
  const allPeoples = countEntrants(peoples);
  const { child, adult, senior } = allPeoples;
  const { prices } = data;
  console.log('====================================================================');
  console.log(Object.keys(allPeoples));
  console.log(Object.values(allPeoples));
  console.log(Object.entries(allPeoples));
  console.log(allPeoples);
  console.log('====================================================================');
  console.log(Object.keys(prices));
  console.log(Object.values(prices));
  console.log(Object.entries(prices));
  console.log(prices);
  console.log('====================================================================');
  console.log(child);

}

console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
