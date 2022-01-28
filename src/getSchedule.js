const data = require('../data/zoo_data');
// Desenvolvido com auxilio de Isabela Nery - https://github.com/isabelanery

const { species } = data;

// Passo 1.1 - Retorna os animais disponíveis para cada dia
const animalByDay = (currDay) => {
  const result = species
    .filter((animal) => animal.availability
      .some((element) => element === currDay))
    .map((item) => item.name);
  return result;
};

// Passo 1.0 - Retorna a agenda de todos os dias
const allDays = () => {
  const days = Object.keys(data.hours);
  const hours = Object.values(data.hours);
  return days.reduce((acc, currDay, index) => {
    if (hours[index].open === 0) {
      acc[currDay] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      acc[currDay] = {
        officeHour: `Open from ${hours[index].open}am until ${hours[index].close}pm`,
        exhibition: animalByDay(currDay),
      };
    }
    return acc;
  }, {});
}

// Passo 2.0 - Responde a função principal
// Verifica se o parâmetro recebido é o dia OU animal
const animalOrDay = (scheduleTarget) => {
  const days = Object.keys(data.hours);
  const animals = species.map((animal) => animal.name);
  const verify = [...days, ...animals];
  return verify.some((element) => element === scheduleTarget);
};

// Passo 3.0 - Responde a função principal
// Retorna a agenda de um dia específico
const thisDay = (scheduleTarget) => {
  const obj = {};
  const fullAgenda = allDays();
  obj[scheduleTarget] = fullAgenda[scheduleTarget];
  return obj;
};

// Passo 4.0: retornar a agenda do animal
const animalSchedule = (scheduleTarget) => species
  .find((animal) => animal.name === scheduleTarget)
  .availability;

// função 0 - Principal
function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return allDays();
  }
  if (animalOrDay(scheduleTarget) === false) {
    return allDays();
  }
  if (Object.keys(data.hours).some((element) => element === scheduleTarget)) {
    return thisDay(scheduleTarget);
  }
  if (species.map((animal) => animal.name).some((item) => item === scheduleTarget)) {
    return animalSchedule(scheduleTarget);
  }
}

// console.log(getSchedule());

module.exports = getSchedule;
