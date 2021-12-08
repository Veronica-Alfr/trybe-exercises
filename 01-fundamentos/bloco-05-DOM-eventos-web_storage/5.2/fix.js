let criandoIrmao = document.createElement('div');
let pai3 = document.getElementById('primeiroFilho');
pai3.insertAdjacentElement('afterend', criandoIrmao);

let textH3 = "Filho criado na 4° section";

let pai5 = document.querySelector('#primeiroFilhoDoFilho');

let filhoS4 = document.createElement('h3');
filhoS4.innerText = textH3;

pai5.appendChild(filhoS4);

let buscarFilho3 = document.getElementsByTagName('h3')[0]
let terceiroFilho = buscarFilho3.parentElement.parentElement.nextElementSibling
console.log(terceiroFilho)

let pai = document.getElementById("pai")
let listaFilhos = pai.childNodes

for(let i = listaFilhos.length - 1; i >= 0; i -=1){
    if(listaFilhos[i].id !== "elementoOndeVoceEsta"){
        listaFilhos[i].remove()
    }
}
document.getElementById("segundoEUltimoFilhoDoFilho").remove()

//document.querySelector(class/id).appendChild()

/*let title = document.createElement('h3');
title.innerHTML = 'Filho da 4° sessão';
document.body.appendChild(title); */ //filho criado