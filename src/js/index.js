// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

//EJ1 Usando este HTML, haz que al hacer click en el botón se vayan añadiendo items con el texto Item 1, Item 2, Item 3,... Los item deben llevar el número correspondiente independiente de con cuantos item empiece la lista-

const btn1Element = document.getElementById('btn1')
const listElement = document.getElementById('list')

const createItem = event => {
    const newLiItem = document.createElement('li')
    newLiItem.textContent = `Item ${listElement.children.length + 1}`
    listElement.append(newLiItem)
}

btn1Element.addEventListener('click', createItem)

//EJ2 Usando el input range que te doy haz un generador de encabezados. El input te permite seleccionar un número del 1 al 6, en función de cual elijas ser generará un encabezado con la etiqueta correspondiente. Si elijes un 3, al hacer click en el botón se generará un h3 con el texto "soy un h3", si elijes un 5 un h5 con el texto "soy un h5" y así para todos.

const labelElement = document.getElementById('label-range')
const rangeElement = document.getElementById('range')
const btnRangeElement = document.getElementById('btn-range')
const divRange = document.getElementById('new-header')

const changeValue = event => {
    labelElement.textContent = rangeElement.value
}
rangeElement.addEventListener('input', changeValue)

const createHeader = event => {
    const rangeValue = `h${rangeElement.value}` 
    const newHeader = document.createElement(rangeValue)

    newHeader.textContent = `Soy un ${rangeValue}`
    divRange.append(newHeader)
}
btnRangeElement.addEventListener('click', createHeader)

//EJ3 Haz un simulador de posts, con este HTML tienes que conseguir que se añada un post con su autor y el texto que hayas escrito dentro del contenedor de posts. Cada post debe ir dentro de un div independiente.

const postContainerElement = document.getElementById('post-container')
const authorInputElement = document.getElementById('author')
const messageInputElement = document.getElementById('message')
const sendElement = document.getElementById('send')


const createPost = event => {
    const authorValue = authorInputElement.value
    const messageValue = messageInputElement.value
    event.preventDefault();
    
    const newPost = document.createElement('div')
    const newAuthor = document.createElement('span')
    const newMessage = document.createElement('p')
    
    newAuthor.textContent = authorValue
    newMessage. textContent = messageValue
    console.log(newAuthor, newMessage)

    newPost.append(newAuthor, newMessage)
    postContainerElement.append(newPost)
}
sendElement.addEventListener('click', createPost)

//EJ4 Crea una función que cree un div con dos botones dentro. Un botón tendrá el texto 'red' y el otro el texto 'green', al hacer click en los botones debe cambiar el background-color del div al color que corresponda.

const rootStyles = document.documentElement.style
const containerElement = document.getElementById('ej4')
const newDiv = document.createElement('div')
const buttonRed = document.createElement('button')
const buttonGreen = document.createElement('button')

buttonRed.textContent = 'RED'
buttonGreen.textContent = 'GREEN'

newDiv.append(buttonRed, buttonGreen)
containerElement.append(newDiv)

const changeRed = event => {
    rootStyles.setProperty('--bg-color', 'red')
}
buttonRed.addEventListener('click', changeRed)

const changeGreen = event => {
    rootStyles.setProperty('--bg-color', 'green')
}
buttonGreen.addEventListener('click', changeGreen)