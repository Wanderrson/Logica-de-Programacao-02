/*Desafio da semana #2
Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! smile
*/

// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function argumentos(n1, n2) {
  return n1 + n2;
}

// Declare uma variável que receba a invocação da função criada acima,
// passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

let soma = argumentos(5, 10) + 5;
console.log(soma);
// Qual o valor atualizado dessa variável?

20;

// Declare uma nova variável, sem valor.

let nv_var;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
   O valor da variável agora é VALOR.
	Onde VALOR é o novo valor da variável.
*/

function addvaraivel(a) {
  if (isNaN(nv_var)) {
    nv_var = a;
  } else {
    nv_var += a;
  }

  return "O valor da variavel agora é " + nv_var;
}

// Invoque a função criada acima.

console.log(addvaraivel(10));

// Qual o retorno da função? (Use comentários de bloco).
console.log(addvaraivel(10));

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function nv(a, b, c) {
  if (a == null || b == null || c == null) {
    return "Preencha todos os valores corretamente!";
  }
  return a * b * c + 2;
}

// function teste(a,b=2){
// 	return a*b;
// }
// console.log(teste(5,3))
// console.log(teste(5))
// function retornando_argumentos(A,B,C){
// 	 return (A*B*C) +2
// }
// ============================================================================
// Invoque a função criada acima, passando só dois números como argumento.

console.log(nv(1, 2));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

console.log("O valor retornado foi ");

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

console.log(nv(1, 2, 5));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

console.log(" O resutado dos 3 valores foi : ", nv(1, 2, 5));
/*
Crie uma função com as seguintes características:
	1. A função deve receber 3 argumentos.
	2. Se somente um argumento for passado, retorne o valor do argumento.
	3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
	4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, 
	e o resultado, dividido pelo terceiro.
	5. Se nenhum argumento for passado, retorne o valor booleano `false`.
*/
function retornandoArgumentos(a, b, c) {
  if (a == null) {
    return false;
  } else if (b == null) {
    return a;
  } else if (c == null) {
    return a + b;
  } else {
    return (a + b) / c;
  }
}

// Invoque a função acima utilizando todas as possibilidades
// (com nenhum argumento, com um, com dois e com três.)
// Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(retornandoArgumentos()); //false
console.log(retornandoArgumentos(8)); // 8
console.log(retornandoArgumentos(2, 8)); // 10
console.log(retornandoArgumentos(10, 5, 3)); // 5
