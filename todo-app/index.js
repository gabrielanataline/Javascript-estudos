// metodos de recuperação de elementos HTML

//document = represente todo html dentro do javascript

// getElementByName = recupera elementos html a partir do nome da tag! Recuperar vários elementos.
// [0] posicao do array, caso o elemento tenha vários form
// const todoForm = document.getElementsByName('form')[0]


// getElementById = recuperar elementos html pelo id
const todoForm = document.getElementById('todo-form')
const todos = []

// addEventListener =  ouvidor de eventos html - 
// submit - enviar formulário
//funções anonimas?! servem para passar como parametro e guardar dentro de variaveis 
todoForm.addEventListener('submit', function (evento) {

    // cancela comportamento padrão de um formulário, que seria o recarregamento da página tentando faze seu envio
    evento.preventDefault()

    // cancela a propagacao do elemento que foi emitido para elementos pai
    // evitando que outros eventos sejam emitidos
    evento.stopPropagation()

    // querySelector = recupera 1 elemento, id, chass ou tag
    //value - represente o atributo do formulário do html
    const todoInput = document.querySelector('#todo')  
    todoInput.value  
    todos.push(todoInput.value) //push adc valor no array
    todoInput.value = ''
    
    renderizarTodos()
})

function renderizarTodos(){
    const todoListSection = document.querySelector('#todos-list')
    todoListSection.innerHTML = ''

    for(let tarefa of todos){
        // createElement = criar elemento html
        const divCard = document.createElement ('div')
        divCard.classList.add('card', 'bg-warning')

        const divCardBody = document.createElement('div')
        divCardBody.classList.add('card-body', 'd-flex', 'align-items-center')

        const pTodoText = document.createElement('p')
        pTodoText.classList.add('todo-text', 'flex-grow-1', 'text-truncate')
        pTodoText.innerText = tarefa
        //InnerText = propriedade que informa qual contéudo de texto está dentro de um elemento html

        const btnDelete = document.createElement('button')
        btnDelete.classList.add('btn', 'delete-todo')
        // () => {} arrow functions SEMPRE são anõnimas
        btnDelete.addEventListener('click',() =>{
            const index = todos.indexOf(tarefa)  //indexOf = informa quem qual indice se encontra um determinado valor dentro do seu array! Se ele ñ achar, retorna -1
            todos.splice(index, 1) //splice  = serve para excluir um determinado valor do seu array a partir do seu indice
            renderizarTodos()
        })

        const spanIcon = document.createElement('span')
        spanIcon.classList.add('material-symbols-outlined')
        spanIcon.innerText = 'delete'

        // appendChild = colocar novos elementos html dentro de outros
        btnDelete.appendChild(spanIcon)
        divCardBody.append(pTodoText, btnDelete)  //append = colocar vários elementes de uma vez
        divCard.appendChild(divCardBody)
        todoListSection.appendChild(divCard)
     
    }
}




// PEGAR INFORMAÇOES DE UM EVENTO: 