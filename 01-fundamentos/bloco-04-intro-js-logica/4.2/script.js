/*let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names) {
    console.log(name)
} 
// usando o for in

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0
for (let i in numbers) {
    soma += numbers[i]
    console.log(soma)
}
console.log(soma/numbers.length)
*/

/* (Math.random()*60) -> ir até antes de 60, usa-se +1 dentro ou fora para chegar ao 60.

arredondar: math.trunc, parseInt, round, floor, tofixed(0).
array dentro de outro array (2 camadas é matriz)
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*let soma = 0
for (index = 0; index < numbers.length; index++) {
    soma += (numbers[index])   
} 
console.log(soma)
console.log(soma/numbers.length)

if (soma/numbers.length > 20) {
    console.log("valor maior que 20")
} else {
    console.log("valor menor ou igual a 20")
}
// maior de todos
let maior = 0
for(index = 0; index < numbers.length; index++) {
      if(numbers[index] > maior)
      maior = numbers[index]
} console.log(maior) */

//imprir a quantidade de números impares

/*let impar = [];
// a varia i e index é entendível pelo JS como ínicio, não precisando de declaração duma var/let.
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 == 1) {
      impar.push(numbers[index])
        
    }
} console.log(impar.length)*/

//menor valor imprimido



// imprimir array de 1 à 25, e retonar a /2 de cada
let array = []

for (i = 1; i < 26; i++) {
    array.push(i)
}console.log(array)

for (j = 0; j < array.length; j++) {
    console.log(array[j]/2)
}



