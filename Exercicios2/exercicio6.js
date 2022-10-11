//Ler dois números inteiros e exibir o quociente e o resto da divisão inteira entre eles.

alert("Informe dois números inteiros, para saber o quociente e o resto da divisão entre eles!")

let numero1 = Number(prompt("Digite o primeiro número:"))
let numero2 = Number(prompt("Digite o segundo número:"))

let quociente = numero1/numero2
let resto = numero1%numero2

alert(numero1+" dividido com o número "+numero2+" o quociente é: "+quociente+" e o resto é: "+resto)