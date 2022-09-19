/**
 * operadores lógicos
 */

//E

//V -> Verdadeiro
//F -> Falso

/**
 * V V -> V
 * F V -> F
 * V F -> F
 * F F -> F
 */
// Operador E &&
// médio precisa ser >= a 7 e ter 80% de presença
const media = (7 + 10 + 10) /3
const presenca = 0.95

console.log(media>=7 && presenca >= 0.8) // && representa o operador lógico E, dentro do javascript (testar se duas condições são verdadeiras)

//Operador Ou ||
/**
 * V V -> V
 * F V -> V
 * V F -> V
 * F F -> F
 */

console.log(4 > 7 || 3 >2) //false
console.log(5 > 3.5 || 7 > 8) // true

const estado ='MG'
console.log(estado == 'SP' || estado == 'MG')

const idade = 30
console.log(idade >= 16 || idade <60)

//Operador NOT ! - reverter o valor booleano
/**
 * not V -> F
 * not F -> V
 */

const resultado = 5 < 3

console.log(!resultado)
console.log(!true) 
console.log(!false)

const logado = false
if (!logado) {
    console.log('Você não pode acessar meu site')
}









