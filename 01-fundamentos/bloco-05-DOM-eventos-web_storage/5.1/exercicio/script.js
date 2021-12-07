function paragrafo(frase) {
    document.getElementsByTagName("p")[1].innerText = frase
}
paragrafo("Me vejo numa empresa internacional.");

function backgroundTrybe() {
    let mudarFundo = document.getElementsByClassName('main-content')[0];
    mudarFundo.style.background = "rgb(76,164,109)";
}
backgroundTrybe();

function backgroundCenter() {
    let center = document.getElementsByClassName('center-content')[0];
    center.style.background = "white";
}
backgroundCenter();

function textoH1() {
    let changeH1 = document.getElementsByTagName('h1')[0];
    changeH1.innerText = "Exercício 5.1 - JavaScript";
}
textoH1();
