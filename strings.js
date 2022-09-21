// delimitação de strings, " ' `, aspas simples, duplas ou crase
// \n = quebra de linha

const aspasSimples ='olá, \nmundo'
console.log(aspasSimples)

const aspasDuplas = "Outra mensagem diferente testando \n quebra de linha"
console.log(aspasDuplas)

const textoComCrase =`O texto com crase pode ser
quebrado a linha
sem precisar inserir nada.`
console.log(textoComCrase)

//no javascript, dentro de uma crase(``)) podemos contatenar dessa forma: ${variavel} /alert(`Então o seu nome é ${nomeUsuario} 

    // métodos das strings = funçøes que executam alguma coisa
    const texto ='O Javascript foi criado alguns anos após o Python. No entando, o Javascript é bem mais bacana.'
    
    console.log(texto.toUpperCase()) // (variavel.toUpperCase = vai pegar o texto e deixar todas as letras maiuscula.
    console.log(texto.toLowerCase()) //(variavel.toLowerCase()) deixar todas as letras minusculas.
    console.log(texto.concat(' A linguagem C é a mãe de todas as linguagens.'))
    //(variavel.concat('inserir frase'))

    console.log(texto[2],texto[17])
    //(variavel[14] pega a o valor que está na posição.
    console.log(texto.substring(2,12))
    //(variavel.substring(2) pega a partir da posição desejada, para a frente
    //para selecionar até o fim, preciso selecionar o campo que desejo, mas um campo adicional

    //case sensitive:
    
    console.log(texto.replace('Javascript', 'Rust'))
    // replace, substituir o primeiro valor pelo segundo e só realiza com uma única palavra.
    
    console.log(texto.replaceAll('Javascript', 'Kotlin'))
    //substitui todas exatamente iguais, m ou m tbm.


    console.log(texto.replace(/Javascript/g, 'PHP'))
    //g vai procurar a palavra globalmente e vai alterar somente palavras exatamente iguais
    console.log(texto.replace(/Javascript/gi, 'PHP')) 
    //gi vai procurar a palavra globalmente e alterar tanto letras maiuscula quanto minusculas

    //buscando arquivos

    const html = '<!DOCTYPE html>\n<html></html>'

    //startsWith = verificar se o arquivo começa da mesma forma 

    console.log(html.startsWith('<!DOCTYPE html>'))

    console.log(html.endsWith('batata'))

    const mensagem= '              Olá mundo'
    console.log(mensagem)
    console.log(mensagem.trim())
    //permite retirar espaços em branco, no inicio e no fim

    let senha ='sonic'
    console.log(senha.length>=8)
    //length = saber quantidades de caracteres
