// Crie um algoritmo para ler N números, some-os e faça a média entre os números



let numero = parseFloat(prompt(`Quantas notas irá inserir?`))
soma = 0
for (let i=1; i<=numero; i++){
    let nota = parseFloat(prompt(`Digite a ${i} nota:`))
    soma = soma+nota
   }
alert('A média das notas é: \n'+ (soma/numero).toFixed(2))





