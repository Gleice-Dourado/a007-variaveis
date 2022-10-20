let nome  = prompt("Qual o seu nome?")
let idade = Number(prompt("Qual a sua idade?"))

console.log(typeof nome)
console.log(typeof idade)
// 1 - Foi impresso como undefined pq eu não atribui nenhum valor as variaveis.

// 2 - percebi que a variavel idade estava com o tipo string mesmo recebendo um numero, então modifiquei o tipo para number
  
console.log("Olá", nome, "você tem", idade, "anos")
//-------------------------------------------------------

/* let a = prompt("Você está usando uma roupa azul hoje?")
let b = prompt("Você está usando uma roupa vermelha hoje?")
let c = prompt("Você está usando uma roupa branca hoje?")

console.log(a)
console.log(b)
console.log(c) */

const perguntaA = "Você está usando uma roupa azul hoje?"
const respostaA = prompt(perguntaA)
const perguntaB = "Você está usando uma roupa vermelha hoje?"
const respostaB = prompt(perguntaB)
const perguntaC = "Você está usando uma roupa branca hoje?"
const respostaC = prompt(perguntaC)

console.log(perguntaA, "-", respostaA)
console.log(perguntaB, "-", respostaB)
console.log(perguntaC, "-", respostaC)