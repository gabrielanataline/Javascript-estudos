//comparar um código com o outro, false or true
//no javascript testa o CONTEÚDO da variável
//(typeof) = retorna o tipo da váriavel
// comparar diferença != conteúdo/valor compara apenas o conteúdo 
// comparar diferença !== conteúdo/valor e o tipo
// comparar igualdade == conteúdo
// comprar igualdade === conteúdo e tipo 

const msg = 'Eu sou uma mensagem'
const msg2="Eu sou outra mensagem"
console.log(msg == msg2) //false

const num = 5
const num2 = 5
console.log(num == num2) //true

let a= 78
let b ='78'
console.log( a==b ) //true

//identicos
console.log(a===b)  //false 

//diferença
console.log(msg != msg2) //true
console.log(a != b) //false
console.log(a !== b) //true

//comparação, se é maior
a = 56
b = 30
let c = 500
let d = 500
console.log(a > b) //true
console.log(c >= d) //true

console.log(3<7.5) //3 é menor que 7.5?
console.log(7.5<7.5)
console.log(8<=8)

