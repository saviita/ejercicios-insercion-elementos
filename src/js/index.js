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
const createElements = () => {
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
}
createElements()

//EJ5 Crea una función que sea capaz de generar 25 números aleatorios y los devuelva.

const randomNumbers = []
const generateNumbers = () => {
    for(let i = 0; i < 25; i++) {
        randomNumbers.push(Math.floor(Math.random() * 51))
    }
}
generateNumbers()

//EJ6 Crea una función que reciba los 25 números aleatorios que has creado en el ejercicio anterior y genere e inserte en el DOM 2 listas, una con números pares y otra con números impares.

const containerElement = document.getElementById('ej5')

// const createList = numbers => {

//     const even = numbers.filter(number => {
//         return number % 2 === 0
//     })
    
//     const odd = numbers.filter(number => {
//         return number % 2 !== 0
//     })
    
//     const fragment = document.createDocumentFragment()
//     const evenList = document.createElement('ul')
//     const oddList = document.createElement('ul')

//     even.forEach(number => {
//         const evenNumber = document.createElement('li')
//         evenNumber.textContent = number
//         evenList.append(evenNumber)
//     })

//     odd.forEach(number => {
//         const oddNumber = document.createElement('li')
//         oddNumber.textContent = number
//         oddList.append(oddNumber)
//     })

//     fragment.append(evenList, oddList)
//     containerElement.append(fragment)
// }
// createList(randomNumbers)

const evenOddLists = () => {
    const oddList = document.createElement('ul')
    const evenList = document.createElement('ul')
    const numbers = randomNumbers

    for (const number of numbers) {
        const newLi = document.createElement('li')
        newLi.textContent = number

        if(number % 2 === 0) {
            evenList.append(newLi)
        } else {
            oddList.append(newLi)
        }
    }
    containerElement.append(oddList, evenList)

}
evenOddLists()

//EJ7 Con esta estructura, crea una función que, a medida que vayas escribiendo, te ponga dentro de la lista:
//   - El texto tiene X caracteres.
//   - El texto tiene X vocales.
//   - El texto tiene X consonantes.
//   - Has introducido X espacios

const listInputElement = document.getElementById('input-list')
const ulElement = document.getElementById('list-elements')
const fragment = document.createDocumentFragment()

const checkContent = event => {
    const text = listInputElement.value
    let counterCharacters = text.length;
    let counterVowels = 0;
    let counterConsonants = 0;
    let counterSpace = 0;
    
    
    const vowels = 'aeiou'
    for(const letter of text){
        if (vowels.includes(letter)) {
            counterVowels++
        } else if (letter === ' '){
            counterSpace++
        } else {
            counterConsonants++
        }
    }
    
    const liCharacters = document.createElement('li')
    liCharacters.textContent = `El texto tiene ${counterCharacters} caracteres`
    
    const liVowels = document.createElement('li')
    liVowels.textContent = `El texto tiene ${counterVowels} vocales`

    const liConsonants = document.createElement('li') 
    liConsonants.textContent = `El texto tiene ${counterConsonants} consonantes`

    const liSpaces = document.createElement('li')    
    liSpaces.textContent = `El texto tiene ${counterSpace} espacios`

    fragment.append(liCharacters, liVowels, liConsonants, liSpaces)
    ulElement.textContent = ''
    ulElement.append(fragment)

}
listInputElement.addEventListener('input', checkContent)

//EJ8 Con este HTML consigue que al introducir un número POSITIVO y MAYOR de 0 se genere la tabla de multiplicar de ese número del 0 al 10 como elementos de la lista. En el caso de que el número no sea correcto o no haya número, el botón estará desactivado.
const inputMultiplayElement = document.getElementById('input-multiplay')
const btnMultiplayElement = document.getElementById('btn-multiplay')
const listMultiplayElement = document.getElementById('list-multiplay')

const multiplayNumber = event => {
    const fragmentMultiplay = document.createDocumentFragment()
    const number = inputMultiplayElement.value
    console.log('hello')
    for(let i = 0; i < 11; i++){
        const result = number * i
        const resultMultiplay = document.createElement('li')
        resultMultiplay.textContent = `${number} x ${i} = ${result}`
        fragmentMultiplay.append(resultMultiplay)
    }

    listMultiplayElement.textContent = ''
    listMultiplayElement.append(fragmentMultiplay)
}
btnMultiplayElement.addEventListener('click', multiplayNumber)

//EJ9 Con este objeto debes crear tarjetas de usuario que muestren todos los datos, el diseño es libre, lo importante es que muestren toda la información del usuario y la imagen de perfil. Crea una función que genere todas las tarjetas de usuario y las inserte en el DOM
const USERS = [
    {
      name: 'Josep Flores',
      age: 77,
      username: 'Josep85',
      email: 'Josep_Flores@hotmail.com',
      profileImage: 'https://randomuser.me/api/portraits/women/24.jpg'
    },
    {
      name: 'Ricardo Rosas',
      age: 43,
      username: 'Ricardo_Rosas',
      email: 'Ricardo_Rosas22@yahoo.com',
      profileImage: 'https://randomuser.me/api/portraits/men/57.jpg'
    },
    {
      name: 'Iván Tamayo',
      age: 40,
      username: 'tamayo87',
      email: 'Ivan_Tamayo61@yahoo.com',
      profileImage: 'https://randomuser.me/api/portraits/men/9.jpg',
      job: 'Lead Communications Designer'
    },
    {
      name: 'Maica Villanueva',
      age: 64,
      username: 'Maica.Villanueva18',
      email: 'Maica.Villanueva1@yahoo.com',
      profileImage: 'https://randomuser.me/api/portraits/women/4.jpg'
    },
    {
      name: 'Pedro Estrada',
      age: 77,
      username: 'Pedro29',
      email: 'Pedro_Estrada22@hotmail.com',
      profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
      job: 'Central Directives Liaison'
    },
    {
      name: 'Jorge Cedillo',
      age: 33,
      username: 'Jorge_Cedillo',
      email: 'Jorge.Cedillo2@yahoo.com',
      profileImage: 'https://randomuser.me/api/portraits/men/88.jpg'
    }
  ];
  const cardsElement = document.getElementById('cards')

  const createCard = () => {
      const fragmentUser = document.createDocumentFragment()
      
      for(const field of USERS){
        const newName = document.createElement('span')
        newName.textContent = field.name

        const newAge = document.createElement('span')
        newAge.textContent = field.age

        const newUsername = document.createElement('span')
        newUsername.textContent = field.username

        const newEmail = document.createElement('span')
        newEmail.textContent = field.email

        const newProfileImg = document.createElement('span')
        newProfileImg.textContent = field.profileImage

        const newCard = document.createElement('div')
        if(field.job){
            const newJob = document.createElement('span')
            newJob.textContent = field.job
            newCard.append(newName, newAge, newUsername, newEmail, newProfileImg, newJob)
        } else {
            newCard.append(newName, newAge, newUsername, newEmail, newProfileImg)
        }


        fragmentUser.append(newCard)
    }
    // document.body.append(fragmentUser)
    cardsElement.append(fragmentUser)
  }
  createCard()