//Dado que a fórmula para conversão de Fahrenheit para Celsius é C = 5/9 (F – 32), ler um valor de temperatura em Fahrenheit e exibi-lo em Celsius

alert("Vamos converter a temperatura de Fahrenheit para Celsius")
let Fahrenheit = Number (prompt("Digite a temperatura em Fahrenheit:"))
let Celsius = (Fahrenheit-32)*5/9
alert("O valor da temperatura em Celsius é: "+Celsius)