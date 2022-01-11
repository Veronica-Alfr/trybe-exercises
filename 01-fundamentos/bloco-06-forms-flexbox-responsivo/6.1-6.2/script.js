let inputName = document.getElementById("names");
let inputEmail = document.getElementById("emails");
let inputCpf = document.getElementById("cpfs");
let inputEnd = document.getElementById("end");
let inputCity = document.getElementById("citys");
let states = document.getElementById("states");
let inputCargo = document.getElementById("cargo-atual");
let textArea = document.getElementById("resumo-curriculo");
let inputDescricao = document.getElementById("cargo-descricao");
let inputDate = document.getElementById("dates");
let radio = document.getElementsByName("home")
var dados = document.getElementById("dados");
let dadosCadastro = document.getElementsByClassName("dados-cadastro");
let day = document.getElementById("dates");

const nomeMaxLength = inputName.maxLength;
const emailMaxLength = inputEmail.maxLength;
const cpfMaxLength = inputCpf.maxLength;
const endMaxLength = inputEnd.maxLength;
const cityMaxLength = inputCity.maxLength;
const resumoMaxLength = textArea.maxLength;
const cargoMaxLength = inputCargo.maxLength;
const descricaoMaxLength = inputDescricao.maxLength;

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

   function statesOptions(){
for (let j = 0; j < statesBrazil.length; j += 1) {
   let option = document.createElement("option");
   option.innerHTML = statesBrazil[j];
   states.appendChild(option)
}
}

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
btn.addEventListener("click", verify);

function verify (event) {
  event.preventDefault();
  dados.innerHTML = '';

  // for(let i = 0; i < dadosCadastro.length; i += 1) {
  //   if(!dadosCadastro[i].value){
  //   alert("Dados inválidos!")
  //   return
  //   }
  // }

if (inputName.value.length > nomeMaxLength || inputName.value == "") {
  return mensageError("Nome: ", inputName, nomeMaxLength)
  //entre (string, variavel)
} else {
  mensageOk("Nome: ", inputName)
}

  if (inputEmail.value.length > 50 || inputEmail.value == "") {
    return mensageError("Email: ", inputEmail, emailMaxLength);
   }
    else {
      mensageOk("Email: ", inputEmail);
    }

  if (inputEnd.value.length > 200 || inputEnd.value == "") {
    return mensageError("Endereço: ", inputEnd, endMaxLength);
  }
  else {
    mensageOk("Endereço: ", inputEnd);
  }

  if (inputCpf.value.length > 11 || inputCpf.value == "") {
      return mensageError("CPF: ", inputCpf, cpfMaxLength);
  }
  else {
      mensageOk("CPF: ", inputCpf);
    }

  if (inputCity.value.length > 28 || inputCity.value == "") {
    return mensageError("Cidade: ", inputCity, cityMaxLength);
  }
  else {
    mensageOk("Cidade: ", inputCity);
  }

  if (inputCargo.value.length > 40 || inputCargo.value == "") {
    return mensageError("Cargo: ", inputCargo, cargoMaxLength);
  }
  else {
    mensageOk("Cargo: ", inputCargo);
  }

  if (inputDescricao.value.length > 500 || inputDescricao.value == "") {
    return mensageError("Descrição do Cargo: ", inputDescricao, descricaoMaxLength);
  }
  else {
    mensageOk("Descrição do Cargo: ", inputDescricao);
  }

  if (textArea.value.length > 1000 || textArea.value == "") {
    return mensageError("Resumo do Currículo: ", textArea, resumoMaxLength);
  } else {
    mensageOk("Resumo do Currículo: ", textArea);
  }

  // if(!statesBrazil[j]){
  //   statesOptions();
  //   const p = document.createElement('p');
  //   p.classList.add('erro');
  //   p.innerHTML = "Escolha um estado!";
  //   states.focus();
  //   return dados.appendChild(p);
  // } else {
  //   const p = document.createElement('p');
  //   p.classList.add("certo");
  //   p.innerHTML = `Estado: ${states[i].value}`;
  //   dados.appendChild(p);
  // }

  // if(!dates) {
  //   const p = document.createElement('p');
  //   p.classList.add('erro');
  //   p.innerHTML = "O campo data está vázio!";
  //   states.focus();
  //   return dados.appendChild(p)
  // } else {
  //   const p = document.createElement('p');
  //   p.classList.add("certo");
  //   p.innerHTML = `Data: ${dates.value}`;
  //   dados.appendChild(p);
  // }

  window.location.href = '#dados';

    // for(let i = 0; i < radio.length; i += 1) {
    //   if (radio[i].checked) {
    //     let textChild = radio[i].parentNode.innerText;
    //     //parâmetro 1 não é o tipo de Node.
    //     let ph = document.createElement("p"); 
    //     ph = "Residência: " + textChild;
    //     dados.appendChild(ph);
    //     console.log(ph)
    //     console.log(radio[i].value)
    //   }
    //   }
}

function mensageError(string, element, maxLength) {
  element.maxLength = maxLength;
  element.value = "";
  const p = document.createElement('p');
  p.classList.add('erro');
  p.innerHTML = `O campo ${string} está incorreto!`;
  dados.appendChild(p);
}

function mensageOk(string, element){
  const p = document.createElement('p');
  p.classList.add('certo');
  p.innerHTML = `${string} ${element.value}`;
  dados.appendChild(p);
}

let btnClear = document.getElementById("btn-clear");
btnClear.addEventListener("click", clear);

function clear() {
  
}

//com o for pecorrendo dados cadastrados, ao usar o .value e questionar
//se é true ou false, pode ser possível trazer de volta a string(nome)
//referente ao que está sendo pecorrido e trazer o seu valor dentro de uma div.