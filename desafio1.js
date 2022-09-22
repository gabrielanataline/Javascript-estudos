/**
 * -> Metodos de pagamento
 * em dinheiro
 * em cheque
 * no cartão
 * 
 * parseFloat(transformar em décimal)
 */


const precoProduto= parseFloat(prompt('Qual o preço do produto?'
))
const mensagem = `
Informe o método de pagamento:
Digite 1 para pagamento em dinheiro
Digte 2 para pagamento em cheque
Digite 3 para pagamento em cartão`

const metododePagamento = prompt(mensagem)

console.log(precoProduto)
console.log(metododePagamento)

/**
 * if = se valor FOR igual à:
 * else = se NÃO for igual
 */

if(metododePagamento == 1 || metododePagamento== 2) {
    const precoFinal = precoProduto*0.9
    alert(`O preço final do pagamento é ${precoFinal.toFixed(2)} reais`)

    } else if (metododePagamento ==3){
    const parcelas = parseInt(prompt(`Informe a quantidade de parcelas`))
    
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



