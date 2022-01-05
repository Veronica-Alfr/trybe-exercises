let states = document.getElementById("states");
let statesBrazil =
   [ 
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    "Goiás",
    "Maranhão",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins",
   ]

for (let j = 0; j < statesBrazil.length; j += 1) {
   let option = document.createElement("option");
   option.innerHTML = statesBrazil[j];
   states.appendChild(option)
}

let day = document.getElementById("dates");
function datesFunc(event) {
   if (isNaN(event.key))//.key observa a tecla que foi clicada 
   {
     event.preventDefault()
   }
   const comprimento = dates.value.length;
   if (comprimento === 2 || comprimento === 5) {
     day.value = day.value + '/';
   }
 }

 function days(daysOn) {
   if(daysOn[0] < 1 || daysOn[0] > 31) {
     return true;
   }
 }
 function moth(mothOn) {
   if(mothOn[1] < 1 || mothOn[1] > 12) {
     return true;
   }
 }
 function year(yearOn) {
   if (yearOn[2] < 0) {
     return true;
   }
 }
 function datesVal() {
   const valor = dates.value.split('/');//dividir em um array
   if (days(valor) || moth(valor) || year(valor) || dates.value.length !== 10) {
     alert('Essa data é invalida!');
     dates.value = '';
   }
 }
 dates.addEventListener("keypress", datesFunc);
 dates.addEventListener("change", datesVal);

