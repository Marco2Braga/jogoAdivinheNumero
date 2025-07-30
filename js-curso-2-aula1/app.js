// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do numero secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Descubra o número secreto.';

let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p','Descubra o número secreto.');

function verificarChute() {
    console.log('botão clicado');
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random( * 5000 + 1));
}