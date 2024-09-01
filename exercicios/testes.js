
//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro:
function calculaIMC(altura, peso){

  let imc = peso / (alturaMetros * alturaMetros);
}
//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(numero1) {
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
let numero2 = 5;
let resultado = calcularFatorial(numero2);
console.log(`O fatorial de ${numero2} é ${resultado}`);
//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$ 4,80.
function converterDolarParaReal(valorEmDolar) {
  let cotacaoDolar = 4.80;
  let valorEmReais = valorEmDolar * cotacaoDolar;
  return valorEmReais.toFixed(2);
}

// Exemplo de uso
let valorEmDolar = 50;
let valorEmReais = converterDolarParaReal(valorEmDolar);
console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);
//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
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
//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calcularAreaPerimetroSalaCircular(raio) {
  let area = Math.PI * raio * raio;
  let perimetro = 2 * Math.PI * raio;
  
  console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
  console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
}

// Exemplo de uso
let raio = 4; // em metros
calcularAreaPerimetroSalaCircular(raio);
//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function mostrarTabuada(numero3) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero3 * i;
    console.log(`${numero3} x ${i} = ${resultado}`);
  }
}

// Exemplo de uso
let numero3 = 7;
mostrarTabuada(numero3);

//--------------------------------------------------------------------------------//
// Resolução dos desafios 2
// Entender listas em programação é fundamental, pois elas representam uma maneira eficaz de organizar e manipular conjuntos de dados relacionados. Uma lista, também conhecida como array em muitas linguagens de programação, permite armazenar múltiplos valores em uma única estrutura, o que simplifica o acesso e a gestão dos dados. A importância de compreender listas reside na capacidade de lidar com coleções de informações de maneira sistemática, permitindo que programas realizem tarefas como armazenamento, busca, ordenação e processamento de dados de forma eficiente e estruturada.

// Pensando nisso, criamos uma lista de atividades (não obrigatórias) focada em prática para melhorar ainda mais sua experiência de aprendizagem.

// Sugestões de respostas
//Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];
//Crie uma lista de linguagens de programação chamada linguagensDeProgramacao.
let linguagensDeProgramacao1 = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
//Adicione à lista linguagensDeProgramacao os seguintes elementos: Java, Ruby e GoLang.
let linguagensDeProgramacao2 = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
linguagensDeProgramacao2.push('Java', 'Ruby', 'GoLang');
// Lista ao final: ['JavaScript', 'C', 'C++', 'Kotlin', 'Python', 'Java', 'Ruby', 'GoLang']
//Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
nomes = ['JavaScript', 'Python', 'Go'];
console.log(nomes[0]);
//Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
nomes = ['JavaScript', 'Python', 'Go'];
console.log(nomes[1]);
//Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
nomes = ['JavaScript', 'Python', 'Go'];
console.log(nomes[2]);