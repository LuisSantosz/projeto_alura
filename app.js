let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Você acertou')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        //${tentativas} - informa quantas tentativas foram feitas até acertar
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('p', mensagemTentativas);
        //desabilitar uma função no html
        document.getElementById('reiniciar').removeAttribute('disabled')



    } else{
        if(chute > numeroSecreto){
        exibirTextoNaTela('p', 'O número secreto é menor')
    } else{
        exibirTextoNaTela('p', 'O número secreto é maior')
    }
//tentativas = tentativas + 1;
tentativas++;
limparCampo();

    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

// limpar o número informado
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';   
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
   exibirMensagemInicial();
   //document.getElementById('reiniciar').setAttribute('disabled' , true)

}


/*
Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.


function calculaIMC(altura, peso){

  let imc = peso / (alturaMetros * alturaMetros);
}


Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }

  return fatorial;
}

// Exemplo de uso
let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);


Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function converterDolarParaReal(valorEmDolar) {
  let cotacaoDolar = 4.80;
  let valorEmReais = valorEmDolar * cotacaoDolar;
  return valorEmReais.toFixed(2);
}

// Exemplo de uso
let valorEmDolar = 50;
let valorEmReais = converterDolarParaReal(valorEmDolar);
console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);


Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function calcularAreaPerimetroSalaRetangular(altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura + largura);
  
  console.log(`Área da sala: ${area} metros quadrados`);
  console.log(`Perímetro da sala: ${perimetro} metros`);
}

// Exemplo de uso
let altura = 3; // em metros
let largura = 5; // em metros
calcularAreaPerimetroSalaRetangular(altura, largura);


Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calcularAreaPerimetroSalaCircular(raio) {
  let area = Math.PI * raio * raio;
  let perimetro = 2 * Math.PI * raio;
  
  console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
  console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
}

// Exemplo de uso
let raio = 4; // em metros
calcularAreaPerimetroSalaCircular(raio);

Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function mostrarTabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

// Exemplo de uso
let numero = 7;
mostrarTabuada(numero);

Link de solução: https://github.com/alura-cursos/js-curso-2/tree/desafio_3

*/

