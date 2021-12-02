 //fatorial de 10
/* let n = 1
for (let i = 1; i < 11; i++) {
    n = n * i     
}
console.log(n)
//asteriscos 5x5
let n = 5

for (let index = 0; index < n; index++){
   let asteriscos = "";
   for (let linha = 0; linha < n; linha++) {
   asteriscos += "*"
}
console.log(asteriscos)
}
 // meio = +1/2

//inverter palavras

let word = 'tryber';
for (i = word.length - 1; i >= 0; i--) {
   console.log(word[i])
}


//Retornar a maior e menor palavra
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = 0
for (i=0; i < array.length; i++) {
    for (let j=0; j < array[i].length + 1; j++)
    if (j > maior) {
        maior = j
    }
}console.log(maior) //retornei a quantidade de letras de JS = 10


//Retornar o maior numero primo entre 0 e 50
let maior = 0
let maiores = []
for (let primos = 0; primos < 51; primos++) {
    if (primos%2 != 0 && primos%3 != 0 && primos%5 != 0 && primos%7 != 0) {
        maiores.push(primos)
        for (let i = 0; i < maiores.length; i++) {
            if (maiores[i] > maior) {
                maior = maiores[i]
            }
        }
    }
}
console.log(maior) */

//Retornar a maior e menor palavra