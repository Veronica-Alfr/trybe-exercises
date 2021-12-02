let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

console.log("Bem vinda, " + info.personagem)
console.log(info)

for (key in info ) {
    console.log(key)
} 

for (let key in info) {
    console.log(info[key])
}

let info2 = { 
    personagem: "e Tio Patinhas",
    origem: "e Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "e O último MacPatinhas",
    recorrente: 'Sim' // Atenção para essa última linha!
};
console.log(info.personagem + " " + info2.personagem)
console.log(info.origem + " " + info2.origem)
console.log(info.nota + " " + info2.nota)

if (info.recorrente == "Sim" && info2.recorrente == "Sim") {
    console.log("Ambos recorrentes")
}
