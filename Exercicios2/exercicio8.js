//Faça um algoritmo que calcule e apresente o valor do volume de uma lata de óleo,dado seu raio e sua altura.

alert("Iremos calcular o volume de uma lata!")
let raio = Number(prompt("Informe o raio da lata:"))
let altura = Number(prompt("Informe a altura da lata:"))
let volume = 3.14*(raio**2)*altura
alert("O volume da lata é "+volume)