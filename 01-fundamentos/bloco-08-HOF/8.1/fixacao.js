const wakeUp = () => 'Acordando!!';
const coffe = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';
// Ao chamar a função doingThings:

const doingThings = (func) => func();
console.log(doingThings(wakeUp), doingThings(coffe));

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!