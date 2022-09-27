/**
 * Objeto é uma estrutura que permite organizar dados na forma de chave-valor
 * Aceita qualquer valor
 */

 let end ={ Rua: 'Rua',
 Número:146,
 estado: 'SP',
 complemento: 'sem complemento',
 cep: '04957-040',
}

let pessoa = {
    nome: 'Joana',
    idade: 23,
    cpf: '123.123.123.12',
    atura: 156,
    endereço: {...end},/** destructuring {...} operador disistruturar um objeto ou um array! Criar um novo objeto com as mesmas propriedas / Copia das propriedas do objeto END */
    solteiro: true,
    habilidade: ['React', 'Java', 'Javascript', 'Golang', 'Rust'],
    cumprimentar(){
        /**para referenciar o objeto dentro do objeto, utilizar a palavra chave: THS */
        console.log(`Olá, tudo bem? \n Meu nome é ${this.nome}`)
    }
        
    }

    pessoa.endereço.Rua = 'Rua Secundária'
    pessoa.nome ='Pablo Escobar' //mudando valor 
    pessoa.cumprimentar() // para método/função executar, necessário -> ()

    pessoa.habilidade.push('Angular')// adc valor ao array
    console.log(pessoa.habilidade[4]) // mostrando valor do array/ 1) nome do objeto 2) sua propriedade
    

    console.log(pessoa['cpf']) //opções de apresentar

    
    // console.log(pessoa.endereço.complemento)
    /**objeto dentro de objeto */

   
