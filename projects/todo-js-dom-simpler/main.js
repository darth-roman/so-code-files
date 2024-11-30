const submitBtn = document.querySelector("#add-task")
const newTodo = document.querySelector('#newTodo')
const todoContainer = document.querySelector(".todo-container")

console.log(todoContainer);

// Long method
// const addTodo = (todoText)=>{
//     const todoElement = document.createElement('div')
//     todoElement.classList = "todo"
    
//     const todoName = document.createElement('h4')
//     todoName.textContent = todoText
//     todoElement.appendChild(todoName)
    
//     const xMark = document.createElement('div')
//     xMark.innerHTML = "&#10005;"
//     todoElement.appendChild(xMark)
//     todoContainer.appendChild(todoElement)
    
// }


if (todoContainer.innerText === "") {
    todoContainer.innerHTML = "<p>Nothing to do</p>"
}
const addTodo = (newTodo) => {
    
    todoContainer.innerHTML += `
            <div class="todo">
                <h4>${newTodo}</h4>
                <div>&#10005;</div>
            </div>
    `
}
submitBtn.addEventListener('click', (e) => {
    // if (todoContainer.innerText !== "") {
    //     todoContainer.innerText = ""
    // }

    e.preventDefault()
    todoContainer.innerText = ""
    addTodo(newTodo.value)
    newTodo.value = ''
})


