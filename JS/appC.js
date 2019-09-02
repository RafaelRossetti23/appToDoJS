const appUl = document.querySelector("#app ul")
const inputElement = document.querySelector("#app input")
const buttonElement = document.querySelector("#app .btn-call-add")
const comunicados = document.querySelector("#comunicados")


let todos = JSON.parse(localStorage.getItem('list_todos')) || []
let description = ['teste']


//criar as description
function renderDescription(divRow2, divCont){
    
    let divColA2 = document.createElement('div')
    divColA2.classList.add('col-sm-12', 'col-md-6')
    let buttonA2 = document.createElement('a')
        buttonA2.classList.add('btn', 'btn-success', 'btn-call-description')
        buttonA2.setAttribute('http', '#')
        buttonA2.setAttribute('type', 'button')
        let bText = document.createTextNode("Adicionar Descrição")
        buttonA2.appendChild(bText)
    divRow2.appendChild(divColA2)  
    divColA2.appendChild(buttonA2) 
        let inputDescription = document.createElement('input')
        inputDescription.setAttribute('type', 'text')
        inputDescription.classList.add('form-control', 'input-description')
        inputDescription.setAttribute('placeholder', 'digite sua descrição...') 
        let divRow3 = document.createElement('div')
        divRow3.classList.add('row')
        let divCol3 = document.createElement('div')
        divCol3.classList.add('col-12')
        divCont.appendChild(divRow3)
        divRow3.appendChild(divCol3)
        divCol3.appendChild(inputDescription)  
        buttonA2.onclick = addInput

           
}

function addInput(){
    let inputCss = document.querySelector('#app .input-description')
    inputCss.style.display = 'block'
    
    }
function addDescription(divCont){
    // criar um Input 
}

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
        divCol.classList.add('col-12')
        let todoH2 = document.createElement('h2')
        divCol.appendChild(todoH2)
        let divColText = document.createTextNode(todo)
            todoH2.appendChild(divColText)
    appUl.appendChild(appLi)
    appLi.appendChild(divCont)
    divCont.appendChild(divRow)
    divRow.appendChild(divCol) 
    let divRow2 = document.createElement('div')
        divRow2.classList.add('row')
    let divColA = document.createElement('div')
        divColA.classList.add('col-sm-12', 'col-md-6')
    let buttonA = document.createElement('a')
        buttonA.classList.add('btn', 'btn-success')
        buttonA.setAttribute('http', '#')
        buttonA.setAttribute('type', 'button')
            let aText = document.createTextNode('Concluir Todo')
                buttonA.appendChild(aText)
            let pos = todos.indexOf(todo)
                buttonA.setAttribute('onclick', 'deleteTodo(' + pos + ')')
    divCont.appendChild(divRow2)
    divRow2.appendChild(divColA)
    divColA.appendChild(buttonA)   
    renderDescription(divRow2, divCol)       
}
}

renderTodos()

// adicionar novo ToDo
function addTodo(){
    comunicados.innerHTML= ''
    comunicados.style.border = 'none'
    if (inputElement.value === ''){
        $('.collapse').collapse('toggle')
        $('#myCollapsible').collapse({
            toggle: false
          })
    }else{
    $('.collapse').collapse('hide')   
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
    localStorage.setItem('list_description', JSON.stringify(description))
}
