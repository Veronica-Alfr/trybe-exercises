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
