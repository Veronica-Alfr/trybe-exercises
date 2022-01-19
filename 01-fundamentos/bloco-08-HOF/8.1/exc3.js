checarCalcular = (arrayGabarito, arrayRespostas) => {
    let count = 0;
      for (let i = 0; i < arrayGabarito.length; i += 1) {
        for (let x = i; x < arrayRespostas.length; x += 1) {
            if (arrayGabarito[i] === arrayRespostas[x]) {
              count += 1;
              break; 
        } else if (arrayRespostas[x] === 'N.A') {
            break;
        }
         else {  
            count -= 0.5;
            break;
        }
        }
      }
      return count;
    }

const hof = (gabarito, respostas, func) => {
    return func(gabarito, respostas)
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
console.log(hof(RIGHT_ANSWERS, STUDENT_ANSWERS, checarCalcular));