const text = document.querySelector("#text")
const list = document.querySelector(".list")
const form = document.querySelector("#form")

const todos = JSON.parse(localStorage.getItem('list'))

if(todos) {
    todos.forEach(  todo => todoList(todo))
}

form.onsubmit = (e) => {
    e.preventDefault()
    let value = text.value
    if (value) {
        todoList({
            text: value,
        })
    }
    text.value = ""
}

function todoList(todo) {
    let li = document.createElement("li")
    li.innerHTML = todo.text

    li.onclick = () => {
        li.classList.add("active")
        saveTodo()
    }

    li.oncontextmenu = (e) => {
        e.preventDefault()
        e.target.remove()
        saveTodo()
    }

    list.appendChild(li)

    saveTodo()
}

function saveTodo() {
    todoLi = document.querySelectorAll('li')

    const todos = []

    todoLi.forEach( each => {
        todos.push({
            text:  each.innerText
        })
    })

    localStorage.setItem('list', JSON.stringify(todos))
}

