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

document.getElementById('dates').DatePickerX.init({
  format:"dd/mm/yyyy",
});

const validate = new JustValidate('#form');

validate
  .addField('#names', [
    {
      rule: 'required',
      errorMessage: 'Nome inválido!!',
    },
    {
      rule: 'maxLength',
      value: 40,
    },
  ])
  .addField('#emails', [
    {
      rule: 'required',
      errorMessage: 'Email é inválido!',
    },
    {
      rule: 'email',
      value: 50,
    },
  ])
  .addRequiredGroup(
    '#radio-group',
    'Escolha uma opção!'
  )