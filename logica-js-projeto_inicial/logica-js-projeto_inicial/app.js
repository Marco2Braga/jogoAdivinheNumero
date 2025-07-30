alert('Boas vindas ao jogo, adivinhe se for capas. Vamos começar!');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
//console.log('Número secreto:', numeroSecreto); 
let chute;
let tentativas = 1;

// loop enquanto:
while (chute != numeroSecreto) {
    chute = prompt(`Digite um número entre 1 e ${numeroMaximo}:`);
    if (chute == numeroSecreto) {
        break; // se o chute for igual ao número secreto, sai do loop
    } else {
        if(chute > numeroSecreto){
            alert(`o numero é menor. ${chute}`);
        } else {
            alert(`o numero é maior. ${chute}`);
        }
        tentativas++;
    }
}
//condição ternario = if / else 
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns, você acertou! O número secreto era ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

if (tentativas > 1) {
    alert(`Parabéns, você acertou. ${numeroSecreto} com ${tentativas} tentativas.`);
} else {
    alert(`Parabéns, você acertou. ${numeroSecreto} com ${tentativas} tentativa.`);
}

//EXERCÍCIOS ;
// alert('boas vindas');
// let nome = 'lua';
// let idade = 25;
// let numeroDeVendas = 50;
// alert('erro preencha todos os campos');
// let mensagemDeErro = 'erro preencha todos os campos';
// alert(mensagemDeErro);

// let nome = prompt('Digite seu nome:');
// let idade = prompt('Digite sua idade:');

// if (idade >= 18){
//     alert('Já pode tirar a CNH.')
// }

// let dia = prompt('Qual dia da semana?');
// if (dia == 'sabado' && dia == 'domingo'){
//     alert('Bom final de semana!');
// } else {
//     alert('Boa semana!');  
// }

// let num = prompt('digite um número:');
// if(num > 0) {
//     alert(num + ' é positivo');
// } else {
//     alert('num negativo');
// }

// alert('vamos jogar!');
// let parametro1 = Number(prompt('Digite o primeiro parâmetro:'));
// let parametro2 = Number(prompt('Digite o segundo parâmetro:'));
// let parametro3 = Number(prompt('Digite o terceiro parâmetro:'));

// if (parametro1 + parametro2 + parametro3 > 100) {
//     alert('parabens, você ganhou!');
// } else {
//     alert('tente novamente para ganhar.');
// }

// let saldo = 1500.75;
// let mensagem = `Seu saldo atual é de R$ ${saldo.toFixed(2)}.`;
// alert(mensagem);

// let nome = prompt('Digite seu nome:');
// alert(`booas vindas, ${nome}`);

// let num = 1;
// while(num <= 10){
//     num++;
//     alert(num);
// }

// let num = 10;
// while(num >= 0){
//     console.log(num);
//     num--;
//     //alert(num);  
// }

// let teste = 'Ola, mundo!';
// console.log(teste);

