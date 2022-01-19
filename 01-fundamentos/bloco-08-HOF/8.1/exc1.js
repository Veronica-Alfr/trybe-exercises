const dadosEmployees = (name) => {
  return `Nome: ${name}, Email: ${name.toLowerCase()}@trybe.com`
};

const newEmployees = (dadosEmployees) => {
    const employees = {
      id1: dadosEmployees('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: dadosEmployees('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: dadosEmployees('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
  console.log(newEmployees(dadosEmployees));