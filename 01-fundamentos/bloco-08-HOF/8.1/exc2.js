const same = (num1, num2) => num1 === num2 ? 'Parabéns, você ganhou' : 'Tente novamente';

const numberSortedo = (number, func) => {
    const numberRandom = Math.round(Math.random() * 6);
   return func(number, numberRandom);
}

console.log(numberSortedo(3, same));