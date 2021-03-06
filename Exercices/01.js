// Declarar uma variável chamada `myvar`, sem valor.

let myvar;

// Após declarada, atribua o valor 10 à variável `myvar`.

myvar = 10;

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.

let soma = 15 + 8;

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.

// soma = soma + 1;
// ++soma;
soma++;

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.

// soma = soma * 3;
soma *= 3;

// Qual é o valor da variável `soma` até aqui?

console.log(soma);
// R = 72;

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.

const souninja = true;
// let souninja = true;
// var souninja = true;

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.

const comida = ["arroz", "feijão", "ovo"];

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.

console.log(comida[1]);

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).
// '1' != 1

if (soma === myvar) {
  console.log("ok sao iguais em valor e tipo");
} else {
  console.log("Nao sao igual em valor ou tipo");
}
// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.

console.log("Soma é Menor que Myvar? : ", soma <= myvar);
console.log("Soma é Menor que Myvar? : " + (soma <= myvar));

// Crie uma função chamada `divisao` que receba como parâmetro dois números,
// e retorne o resultado da divisão entre eles.

function divisao(a, b) {
  return a / b;
}

// Invoque a função criada acima, passando os parâmetros 10 e 2.
console.log("10 / 5 : ", divisao(10, 5));
