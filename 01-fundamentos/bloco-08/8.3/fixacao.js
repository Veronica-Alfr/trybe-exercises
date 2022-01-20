const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const listProducts = (array1, array2) => array1.map((product, i) => ({[product]: array2[i]}));

console.log(listProducts(products, prices));

