const text = document.querySelector("#text")
const list = document.querySelector(".list")
const form = document.querySelector("#form")

const todos = JSON.parse(localStorage.getItem('list'))

if(todos) {
    todos.forEach(todo => todoList(todo))
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
        updateLS()
    }

    li.oncontextmenu = (e) => {
        e.preventDefault()
        e.target.remove()
        updateLS()
    }

    list.appendChild(li)

    updateLS()
}

function updateLS() {
    todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('list', JSON.stringify(todos))
}

