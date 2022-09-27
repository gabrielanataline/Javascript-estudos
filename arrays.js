// let arr = new Array ()
// let arr2 = new Array(5)

// Dentro do array, os valores são separados por vírgula! E poso ter vários tipos de dados:números, texto, booleanos.
// Os dados ficam em posições e se inicia do 0


let arr = [10, 15, 9.8, 'Eu sou um texto dentro de um array', 'Olá, mundo',true, false, false ]
console.log(arr[6])
arr [6] = 'Outro texto' /*mudar posição do array*/
console.log(arr[6])// dentro [] dentro coloco a posição que quero
arr[8] = 'Agora a posição 8 existe dentro de arr'


const lista = ['João', 'Maria', 'Paulo', 'Pedro', 'Vitória', 'Augusto', 'Fábio', 'Larissa' ]

lista.push('Roberta') //push, adc contéudo no final do array

lista.unshift('Gustavo') //unshift, adc contéudo no final do array

lista.pop() // pop, remover o último contéudo 

lista.shift() // shift, remove o primeiro contéudo

console.log(lista.concat('Julio')) // gerar um novo array, com o valor no final

console.log(lista.join('-> ')) // join, unir valores com algo no meio



    
    