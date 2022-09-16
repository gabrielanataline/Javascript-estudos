alert(`código funcionando`) //mostrar mensagem para o usuário
const nomeUsuario = prompt("olá usuário") //mostra mensagem e recebe um valor

//Number, transformar string em número
let num= Number(prompt("Olá, "+ nomeUsuario + " Digite algum número, por favor"))
//console.log(typeof num) //tipo do valor que a variável armazena

//SUCESSOR
console.log(num++) //5//operador pós-incremento
console.log(num) //6
console.log(++num) //7 // operador de pré-incremento

//operadores de decremento
console.log(num--) //7 // operador de pós-decremento
console.log(num) //6 
console.log(--num) //5 // operador de pré-decremento














//const antecessor = num - 1
//alert('O antecessor de ' + num + ' é ' + antecessor)