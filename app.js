const listElement = document.querySelector("#app ul")
const inputElement = document.querySelector("#app input")
const buttonElement = document.querySelector("#app button")
const comunicados = document.querySelector("#comunicados")


let todos = JSON.parse(localStorage.getItem('list_todos')) || []
// Criar as Li dos ToDos
function renderTodos(){
    listElement.innerHTML = ''
    comunicados.innerHTML= ''
    comunicados.style.border= 'none'
    for (todo of todos){
        
        // cria a li e o text
        let todoElement = document.createElement('li')
        let todoElementP = document.createElement('p')
        let todoText = document.createTextNode(todo)
        // cria o link para excluir o todo
        let linkElement = document.createElement('a')
        linkElement.classList.add('btn', 'btn-success')
        linkElement.setAttribute("href", "#")
        linkElement.style.textDecoration='none'
            // pega posição dos elemento para excluir
            let pos = todos.indexOf(todo)
                linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')
        
                let linkText = document.createTextNode(" Concluir ToDo")
        
        // add os elementos na pagina 
        //textTodo.appendChild(todoElementP)
        //aTodo.appendChild(linkElement)
        todoElement.appendChild(todoElementP)
        todoElementP.appendChild(todoText)
        listElement.appendChild(todoElement)
        //todoElement.appendChild(todoElementP)
        todoElement.appendChild(linkElement)
        linkElement.appendChild(linkText)
        //listElement.appendChild(todoElement)  
    }
    
}
renderTodos()
// adicionar novo ToDo
function addTodo(){
    comunicados.innerHTML= ''
    comunicados.style.border = 'none'
    if (inputElement.value === ''){
        let msgerro1 = document.createElement('p')
        let msgtext1 = document.createTextNode(`Insira uma tarefa para continuar`)
        msgerro1.appendChild(msgtext1)
        comunicados.style.border= '3px dashed white'
        comunicados.appendChild(msgerro1)
    }else{
    let todoText = inputElement.value
    todos.push(todoText)
    inputElement.value = ''
    renderTodos()
    saveToStorage()
}
}

// deletar todo
buttonElement.onclick = addTodo

function deleteTodo(pos){
   todos.splice(pos, 1)
   renderTodos() 
   saveToStorage()
}
// salvar todos localmente
function saveToStorage (){
    // variavel locaStorage global para acessar o local storage (só guarda uma Key e um Value, por isso converter o vetor em string pelo json)
    localStorage.setItem('list_todos', JSON.stringify(todos))
}
