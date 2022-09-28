/**
 * Funçoes são blocos de construçao fundamentais em javascript.Uma função e um procedimento de Javascript
 * -um conjunto de instruções que executa uma tarefa ou calcula um valor. para usar uma função,você deve
 * defini-la em algum lugar no escopo do qual você quiser chamá-la.
 */


/** Parametros, são valores que passamos para funções, para que elas utilizem esses valores dentro delas*/

function cumprimentar(mensagem, repetir =1) { //posso definir valor do parametro dentro da função
    for (let i =1; i<=repetir; i++){
        alert(`Oiiiiii ${mensagem.toUpperCase()}`)
    }
}
    

cumprimentar('Olá mundo', 3) //argumento para passar ao parámetro

//


function soma(num,num2){
    let result= num+num2
    return result
}

let resultado = soma(4,7)
console.log(`O valor da variável resultado é ${resultado}`)


//

function maiorValor(a,b, c){
    if(a>b && a>c){
        return a
    } else if (b>a && b>c){
        return b
    }else 
    return c
}

const num = parseInt(prompt('Informe o primeiro valor'))
const num2 = parseInt(prompt('Informe o primeiro valor'))
const num3 = parseInt(prompt('Informe o primeiro valor'))
alert(`O maior número entre esse é ${maiorValor(num, num2, num3)}`)




