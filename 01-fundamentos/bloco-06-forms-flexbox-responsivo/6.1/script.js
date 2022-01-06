let states = document.getElementById("states");
let statesBrazil =
   [
    "",
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

let btn = document.getElementById("btn");
btn.addEventListener("click", buttonSubmit)
let inputName = document.getElementById("names");
let inputEmail = document.getElementById("emails");
let inputCpf = document.getElementById("cpfs");
let inputEnd = document.getElementById("end");
let inputCity = document.getElementById("citys");
let selectState = document.getElementById("states");
let inputHome = document.getElementById("residencia-1");
let inputApt = document.getElementById("residencia-2");
let inputCargo = document.getElementById("cargo-atual");
let textArea = document.getElementById("resumo-curriculo");
let inputDescricao = document.getElementById("cargo-descricao");

function buttonSubmit (event) {
if (inputName.value.length > 40) {
  event.preventDefault();
  alert("Quantidade de caracteres inválidos!");
}

  if (inputEmail.value.length > 50) {
    event.preventDefault();
    alert("Quantidade de caracteres inválidos!");
  }

  if (inputCpf.value.length > 11) {
    event.preventDefault();
    alert("Quantidade de caracteres inválidos!");
  }

  if (inputEnd.value.length > 200) {
    event.preventDefault();
    alert("Quantidade de caracteres inválidos!");
  }

  if (inputCpf.value.length > 11) {
    event.preventDefault();
    alert("Quantidade de caracteres inválidos!");
  }

  if (inputCity.value.length > 28) {
    event.preventDefault();
    alert("Quantidade de caracteres inválidos!");
  }

  if (selectState.value == "") {
    event.preventDefault();
    alert("Escolha um estado!");
  }

  if (inputCargo.value.length > 40) {
    event.preventDefault();
    alert("Quantidade de caracteres inválidos!");
  }

  if (inputDescricao.value.length > 500) {
    event.preventDefault();
    alert("Quantidade de caracteres inválidos!");
  }

  if (textArea.value.length > 1000) {
    event.preventDefault();
    alert("Quantidade de caracteres inválidos!");
  }

  if (textArea.value.length > 1000) {
    event.preventDefault();
    alert("Quantidade de caracteres inválidos!");
  }
  
}