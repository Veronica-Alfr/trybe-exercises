// Faça uma lista com as suas frutas favoritas
const specialFruit = ['pessêgo', 'pêra', 'morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['maça', 'laranja', 'banana'];

const fruitSalad = (fruit, additional) => {
    return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));