/**Um posto está vendendo combustiveis com a seguinte tabela de descontos:
 * 
 * Alcool:
 * até 25 litros, desconto de 2% por litro
 * acima de 25 litros, desconto de 4% por litro
 * 
 * Gasolina
 * até 25 litros, desconto de 3% por litro
 * acima de 25 litros, desconto de 5% por litro
 * 
 * Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustivel
 * 
 * calcule e imprima o valor a ser pago pelo cliente 
 * 
 * preço do litro de gasolina é 2,70
 * preço do litro do álcool é 1,90
 */


const combustivel= (prompt(`Qual combustivel irá abastecer?
A - Álcool.toUpperCase();
G - gasolina?`))
const litros = parseInt(prompt(`Quantos litros você irá abastecer?`))

if (combustivel.toUpperCase() == 'A' && litros <=25){
    const litros1= (litros*1.9)*0.98;
    alert(`O preço final é ${litros1.toFixed(2)} reais`)
} else if (combustivel.toUpperCase() =='A' && litros > 25){
    const litros1= (litros*1.9)*0.96;
    alert(`O preço final é ${litros1.toFixed(2)} reais`)
} else if (combustivel.toUpperCase()== 'G' && litros<=25){
    const litros1 = (litros*2.70)*0.97;
    alert(`O preço final é ${litros1.toFixed(2)} reais`)
} else if (combustivel.toUpperCase()== 'G' && litros >25){
    const litros1 = (litros*2.7)*0.95
    alert(`O preço final é ${litros1.toFixed(2)} reais`)
}

/**pontos importantes
 * string dentro do if e else ''
 * 
 */