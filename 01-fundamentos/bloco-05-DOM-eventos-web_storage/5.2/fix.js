/*let criandoIrmao = document.createElement('section');
let pai3 = document.getElementById('elementoOndeVoceEsta');
activeElem.insertAdjacentElement('beforebegin', criandoIrmao);
pai3.appendChild(criandoIrmao)*/

let textH3 = "Filho criado na 4° section";

let pai5 = document.querySelector('#primeiroFilhoDoFilho');

let filhoS4 = document.createElement('h3');
filhoS4.innerText = textH3;

pai5.appendChild(filhoS4);

//document.querySelector(class/id).appendChild()

/*let title = document.createElement('h3');
title.innerHTML = 'Filho da 4° sessão';
document.body.appendChild(title); */ //filho criado