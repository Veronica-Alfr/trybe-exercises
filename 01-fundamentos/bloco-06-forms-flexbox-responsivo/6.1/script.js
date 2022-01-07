let inputName = document.getElementById("names");
let inputEmail = document.getElementById("emails");
let inputCpf = document.getElementById("cpfs");
let inputEnd = document.getElementById("end");
let inputCity = document.getElementById("citys");
let selectState = document.getElementById("states");
let inputCargo = document.getElementById("cargo-atual");
let textArea = document.getElementById("resumo-curriculo");
let inputDescricao = document.getElementById("cargo-descricao");
let inputDate = document.getElementById("dates");
let radio = document.getElementsByName("home")
var dados = document.getElementById("dados");

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

function verify (event) {
  event.preventDefault();
  dados.innerHTML = '';

if (inputName.value.length > 40 || inputName.value == "") {
  alert("Quantidade de caracteres inválidos!");
  return
}//  else {
//   let p = document.createElement("p");
//   dados.appendChild(p);
//   p.innerText = "Nome: " + inputName.value;
// }

  if (inputEmail.value.length > 50 || inputEmail.value == "") {
    alert("Quantidade de caracteres inválidos!");
    return
  }
  // else {
  //   let p = document.createElement("p");
  //   dados.appendChild(p);
  //   p.innerText = "E-mail: " + inputEmail.value;
  // }

  if (inputEnd.value.length > 200 || inputEnd.value == "") {
    alert("Quantidade de caracteres inválidos!");
    return
  }
  // else {
  // let p = document.createElement("p");
  // dados.appendChild(p);
  // p.innerText = "Endereço: " + inputEnd.value;
  // }

  if (inputCpf.value.length > 11 || inputCpf.value == "") {
    alert("Quantidade de caracteres inválidos!");
    return
  }
  // else {
  //   let p = document.createElement("p");
  //   dados.appendChild(p);
  //   p.innerText = "CPF: " + inputCpf.value;
  //   }

  if (inputCity.value.length > 28 || inputCity.value == "") {
    alert("Quantidade de caracteres inválidos!");
    return
  }
  // else {
  //   let p = document.createElement("p");
  //   dados.appendChild(p);
  //   p.innerText = "Cidade: " + inputCity.value;
  //   }

  if (selectState.value == "") {
    event.preventDefault();
    alert("Escolha um estado!");
    return
  }
  // else {
  //   let p = document.createElement("p");
  //   dados.appendChild(p);
  //   p.innerText = "Estado: " + selectState.value;
  //   }

  if (inputCargo.value.length > 40 || inputCargo.value == "") {
    alert("Quantidade de caracteres inválidos!");
    return
  }
  // else {
  //   event.preventDefault();
  //   let p = document.createElement("p");
  //   dados.appendChild(p);
  //   p.innerText = "Cargo: " + inputCargo.value;
  //   }

  if (inputDescricao.value.length > 500 || inputDescricao.value == "") {
    alert("Quantidade de caracteres inválidos!");
    return
  }
  // else {
  //   let p = document.createElement("p");
  //   dados.appendChild(p);
  //   p.innerText = "Descrição do Currículo: " + inputDescricao.value;
  //   }

  if (textArea.value.length > 1000 || textArea.value == "") {
    alert("Quantidade de caracteres inválidos!");
    return
  }
  // else {
  //   let p = document.createElement("p");
  //   dados.appendChild(p);
  //   p.innerText = "Resumo do Currículo: " + textArea.value;
  //   }
  
  // for(let i = 0; i < radio.length; i += 1) {
  // if (radio.checked) {
  //   alert("Escolha uma opção!");
  // }
  // }

  // if (alert){
  //   dados = "";
  //   let p = document.createElement("p");
  //   dados.appendChild(p);
  //   p.innerText = "Falta informações!!"
  //   }

}

function buttonSubmit(event){
  verify(event);

  for(let i = 0; i < verify.length; i+= 1) {
    let p = document.createElement("p");
    
  //for não funcionará aqui já que os inputs possuem nomes diferentes.
    
    dados.appendChild(p[i])
 }
}

let btnClear = document.getElementById("btn-clear");
btnClear.addEventListener("click", clear);

function clear() {
  
}