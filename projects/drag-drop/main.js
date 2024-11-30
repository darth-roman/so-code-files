// const dragDropContainer = document.querySelector("#drag-drop-container")

// dragDropContainer.addEventListener("dragstart", (event)=>{

// })

// const dragStartHandler = (ev) => {
//     ev.dataTransfer.setData("text/html", ev.target.outerHTML)
//     ev.dataTransfer.affectAllowed = "move"
//     console.log(ev.target.outerHTML);
// }

// const dropHandler = (ev) => {
//     ev.preventDefault()

//     const data = ev.dataTransfer.getData("text/html")
//     console.log(data);
//     ev.target.innerHTML += data 
// }

// const dragOverHandler = (ev) => {
//     ev.preventDefault()
//     ev.dataTransfer.dropEffect = "copy"
// }
// window.addEventListener("DOMContentLoaded", ()=>{
//     const element = document.querySelector("#item-1")
//     element.addEventListener("dragstart", dragStartHandler)
// })

// dragDropContainer.addEventListener("drop", (event) => dropHandler(event))
// dragDropContainer.addEventListener("dragover", (event) => dragOverHandler(event))

const burger = document.querySelector('#burger')
const burgerList = document.querySelector('.right ul')
const body = document.querySelector('body')

console.log(body);

burger.addEventListener('click', () => {
    if (!burger.classList.contains("hidden")) burger.classList.add("show")
})

body.addEventListener("click", (event) => {
    if (burger.classList.contains("show")) burger.classList.remove("show")
})
