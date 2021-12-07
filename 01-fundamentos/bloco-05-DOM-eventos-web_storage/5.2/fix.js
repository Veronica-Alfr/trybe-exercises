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

while (pai.firstChild) {
    pai.removeChild()
}

//document.querySelector(class/id).appendChild()

/*let title = document.createElement('h3');
title.innerHTML = 'Filho da 4° sessão';
document.body.appendChild(title); */ //filho criado