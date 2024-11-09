// const todoContainer = document.querySelector('.todo-container')
// const todoInputField = document.querySelector("#newTodo")
// const addBtn = document.querySelector('#add-task')

// const body = document.querySelector("body")
// console.log(body);

// const changeBackground = (elem, color) => {
//     elem.style.backgroundColor = color
// }

// body.addEventListener('click', () => changeBackground(body, "#a1c181"))




// const titleElement = document.getElementsByTagName('title')[0]
// console.log(titleElement);
// titleElement.innerText = "Amina"

// // First method of inserting to your DOM
// const todoElement = document.createElement('div')
// todoElement.classList = "todo"

// // div > title
// const todoTitle = document.createElement('div')
// todoTitle.classList = "title"
// h4Title = document.createElement('h4')
// h4Title.textContent = todoInputField.value || "Default Value"
// todoTitle.appendChild(h4Title)

// todoElement.appendChild(todoTitle)

// // div > desc 
// const todoDesc = document.createElement('div')
// todoDesc.classList = "desc"
// paraDesc = document.createElement('p')
// paraDesc.textContent = "Random Quote"
// todoDesc.appendChild(paraDesc)

// todoElement.appendChild(todoDesc)

// // div > actions
// const todoActions = document.createElement('div')
// todoActions.classList = "actions"

// const todoActionEdit = document.createElement('div')
// todoActionEdit.classList = 'action'
// const btnEdit = document.createElement('button')
// btnEdit.classList = 'btn btn-edit'
// todoActionEdit.appendChild(btnEdit)

// const todoActionDelete = document.createElement('div')
// todoActionDelete.classList = 'action'
// const btnDelete = document.createElement('button')
// btnDelete.classList = "btn btn-delete"
// todoActionDelete.appendChild(btnDelete)


// btnEdit.textContent = "Edit"
// btnDelete.textContent = "Delete"

// todoActionEdit.appendChild(btnEdit)
// todoActionDelete.appendChild(btnDelete)

// todoActions.appendChild(todoActionEdit)
// todoActions.appendChild(todoActionDelete)

// todoElement.appendChild(todoActions)

// todoContainer.appendChild(todoElement)

// const insertToDOM = (parent, todoValue) => {
//     const todoElement = document.createElement('div')
//     todoElement.classList = "todo"

//     // div > title
//     const todoTitle = document.createElement('div')
//     todoTitle.classList = "title"
//     h4Title = document.createElement('h4')
//     h4Title.textContent = todoValue || "Default Value"
//     todoTitle.appendChild(h4Title)

//     todoElement.appendChild(todoTitle)

//     // div > desc 
//     const todoDesc = document.createElement('div')
//     todoDesc.classList = "desc"
//     paraDesc = document.createElement('p')
//     paraDesc.textContent = "Random Quote"
//     todoDesc.appendChild(paraDesc)

//     todoElement.appendChild(todoDesc)

//     // div > actions
//     const todoActions = document.createElement('div')
//     todoActions.classList = "actions"

//     const todoActionEdit = document.createElement('div')
//     todoActionEdit.classList = 'action'
//     const btnEdit = document.createElement('button')
//     btnEdit.classList = 'btn btn-edit'
//     todoActionEdit.appendChild(btnEdit)

//     const todoActionDelete = document.createElement('div')
//     todoActionDelete.classList = 'action'
//     const btnDelete = document.createElement('button')
//     btnDelete.classList = "btn btn-delete"
//     todoActionDelete.appendChild(btnDelete)


//     btnEdit.textContent = "Edit"
//     btnDelete.textContent = "Delete"

//     todoActionEdit.appendChild(btnEdit)
//     todoActionDelete.appendChild(btnDelete)

//     todoActions.appendChild(todoActionEdit)
//     todoActions.appendChild(todoActionDelete)

//     todoElement.appendChild(todoActions)

//     parent.appendChild(todoElement)
// }

// // insertToDOM(todoContainer, todoInputField.value)
// // insertToDOM(todoContainer, todoInputField.value)


// Second Method

// const insertToDOM = (value) => {
//     todoContainer.innerHTML += `
//         <div class="todo">
//             <div class="title">
//                 <h4>${value}</h4>
//             </div>
//             <div class="desc">
//                 <p>
//                     Random
//                 </p>
//             </div>
//             <div class="actions">
//                 <div class="action">
//                     <button class="btn btn-edit">Edit</button>
//                 </div>
//                 <div class="action">
//                     <button class="btn btn-delete">Delete</button>
//                 </div>
//             </div>
//         </div>
//     `
// }



// addBtn.addEventListener('click', (event) => {
//     event.preventDefault()
//     insertToDOM(todoInputField.value)
// })


// Fetch Todos from data.json file
// const fetchTodos = async () => {
//     const response = await fetch("/data/todo.json")
//     const data = await response.json()
//     return data;
// }

// const insertToDOMAsync = async () => {
//     todos = await fetchTodos()
//     todos.map(todo => {
//         todoContainer.innerHTML += `
//             <div class="todo" data-key="${todo.id}">
//                 <div class="title">
//                     <h4>${todo.title}</h4>
//                 </div>
//                 <div class="desc">
//                     <p>
//                         ${todo.desc}
//                     </p>
//                 </div>
//                 <div class="actions">
//                     <div class="action">
//                         <button class="btn btn-edit">Edit</button>
//                     </div>
//                     <div class="action">
//                         <button class="btn btn-delete">Delete</button>
//                     </div>
//                 </div>
//             </div>
//         `
//     })

    // this.addEventListener('click', (event) => {
    //     event.target.style.backgroundColor="#212529"
    // })
//}

// const todoDiv = document.getElementsByClassName('todo')[0]


// todoDiv.addEventListener('click', (event) => {
//     console.log(todoDiv);
//     console.log(event);
// })

// insertToDOMAsync()

const todoContainer = document.querySelector('.todo-container')
let newTodo = document.getElementById("newTodo")
const addButton = document.querySelector('#add-task')

const insertTodo = (value) => {
    todoContainer.innerHTML += `
        <div class="todo">
            <div class="title">
                <h4>${value}</h4>
            </div>
            <div class="desc">
                <p>
                    Random
                </p>
            </div>
            <div class="actions">
                <div class="action">
                    <button class="btn btn-edit">Edit</button>
                </div>
                <div class="action">
                    <button class="btn btn-delete">Delete</button>
                </div>
            </div>
        </div>
    `
}

addButton.addEventListener('click', (event) => {
    event.preventDefault()
    insertTodo(newTodo.value)
    newTodo.value = ""
})
