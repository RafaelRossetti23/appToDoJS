const appUl = document.querySelector("#app ul")
const inputElement = document.querySelector("#app input")
const buttonElement = document.querySelector("#app button")
const comunicados = document.querySelector("#comunicados")


let todos = JSON.parse(localStorage.getItem('list_todos')) || []
// Criar as Li dos ToDos
function renderTodos(){
    appUl.innerHTML = ''
    comunicados.innerHTML= ''
    comunicados.style.border= 'none'
    for (todo of todos){
        
    let appLi = document.createElement('li')
    let divCont = document.createElement('div')
        divCont.classList.add('container') 
    let divRow = document.createElement('div')
        divRow.classList.add('row')
    let divCol = document.createElement('div')
        divCol.classList.add('col-sm-12', 'col-md-8', 'col-xl-10')
        let todoH2 = document.createElement('h2')
        divCol.appendChild(todoH2)
        let divColText = document.createTextNode(todo)
            todoH2.appendChild(divColText)
    
    appUl.appendChild(appLi)
    appLi.appendChild(divCont)
    divCont.appendChild(divRow)
    divRow.appendChild(divCol) 
    
    let divColA = document.createElement('div')
        divColA.classList.add('col-sm-12', 'col-md-4', 'col-xl-2')
    let buttonA = document.createElement('a')
        buttonA.classList.add('btn', 'btn-success')
        buttonA.setAttribute('http', '#')
        buttonA.setAttribute('type', 'button')
            let aText = document.createTextNode('Concluir Todo')
                buttonA.appendChild(aText)
            let pos = todos.indexOf(todo)
                buttonA.setAttribute('onclick', 'deleteTodo(' + pos + ')')
    divRow.appendChild(divColA)
    divColA.appendChild(buttonA)   
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
        comunicados.style.border= '3px dashed #a001fb'
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