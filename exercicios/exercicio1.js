// 1. Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e
// mostrar :
//     a. A menor altura do grupo;
//     b. A maior altura do grupo;

let altura =[];

for (let i=1; i<=5; i++){
let quantidade = parseFloat(prompt('Digite sua altura:'));
altura.push(quantidade)
}
 
let maiorAltura =0
let menorAltura = Number.MAX_VALUE

for (let numero of altura){

    if (numero > maiorAltura){
        maiorAltura = numero
    } if (numero < menorAltura) {
        menorAltura = numero
    }
}

alert(`A menor altura é ${menorAltura.toFixed(2)}`)
alert(`A maior altura é ${maiorAltura.toFixed(2)}`)