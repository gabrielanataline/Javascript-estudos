// 2. Escreva um algoritmo que leia um valor inicial A e imprima o seu fatorial

let numero = parseFloat(prompt('Digite um número, para sabermos o seu fatorial'));
let fatorial = numero

for (let i=1; i<numero; i++){
    fatorial = fatorial*i
}

alert(`O fatorial do número ${numero}, é ${fatorial}!`)



