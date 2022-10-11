/**Criar uma função, responsável por mostrar o alerta na tela  
 * 
 * 
 * dentro do js, representar documento html/ usando método = document
 * 
 * 
 * objeto DOCUMENT é um objeto que faz uma representação do html do seu site dentro do Javascript
*/

function mostrarAlerta(){
    const divAlerta = document.getElementById('alerta') //get ElementById = serve para pegar elemento do HTML, pelo id: alerta
    divAlerta.classList.add('mostrar')
    /**A propriedade classList retorna um array com todas as classes CSS que um elemento possui */
    /** classList.add() serve para adicionar  */
}

function fecharAlerta() {
    const divAlerta = document.getElementById('alerta')
    divAlerta.classList.remove('mostrar') //classList.remove = remover uma classe dinamicamente de dentro de um elemento HTML

}



const btnMostrar = document.getElementById('mostrar')
const btnFechar = document.getElementById('fechar')

//addEventListener - é um método que te permite ouvir eventos do html pelo js. 1)evento que quer escutar
btnMostrar.addEventListener('click', mostrarAlerta) //funcao como parametro = passo apenas a referencia, sem os parênteses () na frente
btnFechar.addEventListener('click', fecharAlerta)