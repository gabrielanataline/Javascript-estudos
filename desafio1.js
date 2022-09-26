/**
 * parseFloat(transformar em décimal)
 */
// ESTRUTURA DE REPETIÇÃO
// WHILE -> ENQUANTO não acontecer o que eu quero, o código irá se repetir

let precoProduto= parseFloat(prompt('Qual o preço do produto?'))

while(isNaN(precoProduto) || precoProduto <=0){
    alert(`O preço digitado é inválido. Por favor, informe o preço apenas com números, sem caracteres especiais (letras ou acentos`)
precoProduto = parseFloat(prompt('Qual é o preço do produto?'))
}

const mensagem = ` 
Informe o método de pagamento:
Digite 1 para pagamento em dinheiro
Digte 2 para pagamento em cheque
Digite 3 para pagamento em cartão`

let metododePagamento = prompt(mensagem)

console.log(precoProduto)
console.log(metododePagamento)

while(isNan(metododePagamento) || metododePagamento <1 || metododePagamento>3){
    alert(`Metódo de pagamento inválido`)
metododePagamento = prompt(mensagem)

}

if(metododePagamento == 1 || metododePagamento== 2) {
    const precoFinal = precoProduto*0.9
    alert(`O preço final do pagamento é ${precoFinal.toFixed(2)} reais`)

    } else if (metododePagamento ==3){
    const parcelas = parseInt(prompt(`Informe a quantidade de parcelas`))

    while(parcelas<1 || parcelas>4){
        alert(`Números de parcelas inválido`)
    const parcelas = parseInt(prompt(`Digite o número de parcelas:`))
    }
    
    if (parcelas ==1){
        const precoFinal = precoProduto*0.85
        alert(`O preço final do pagamento é ${precoFinal.toFixed(2)}reais`)
    } else if (parcelas==2){
        alert(`O preço final do pagamento é ${precoFinal} reais`)
    } else {
        const precoFinal = precoProduto*1.1
        alert(`O preço final de pagamento é ${precoFinal} reais`)
    }
}



