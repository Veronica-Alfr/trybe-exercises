const numbers = [19, 21, 30, 3, 45, 22, 15];
const findDivisibleBy3And5 = (number) => number % 3 === 0 && number % 5 === 0;
console.log(numbers.find(findDivisibleBy3And5));

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = names.find((name) => name.length === 5);
// nessa função eu 'falo' que o comprimento de name(que é cada elemento da const names) é 5

console.log((findNameWithFiveLetters));