// # 8 DOM [Modulo B]

// - 8.1	¿Qué es el árbol de nodos?
// - 8.2	Objeto `document`
// - 8.3	Acceso a los nodos
//    - `getElementById()`
// var mainTitle = document.getElementById('main-title')

// var firstName = prompt('Ingrese su nombre')

// mainTitle.innerHTML = 'Hola ' + firstName

// var mainContainer = document.getElementById('container')

// var firstName = prompt('Ingrese su nombre')

// mainContainer.innerHTML =
//   '<h2 class="red" id="new-main-title">Hola ' + firstName + '</h2>'

// var title = document.getElementById('new-main-title')

// title.innerHTML = 'Hola pedro'

//    - `getElementsByClassName()`

// var listItemsNodes = document.getElementsByClassName('list-item')

// var listItemNode

// for (var i = 0; i < listItemsNodes.length; i++) {
//   listItemNode = listItemsNodes[i]
//   listItemNode.innerHTML = '<h1>Elefante número ' + (i + 1) + '</h1>'
// }

// - 8.4	Crear y eliminar nodos
//    - `createElement`

var mainListNode = document.getElementById('main-list')

mainListNode.innerHTML = ''

var numbers = [ 1, 2, 34, 45, 5, 6, 677, 8, 8 ]

var liNode

for (var i = 0; i < numbers.length; i++) {
  liNode = document.createElement('li')
  liNode.className = 'red blue'
  liNode.innerHTML = numbers[i]
  liNode.id = i
  mainListNode.appendChild(liNode)
}

// var liNode4 = document.getElementById('4')

// liNode4.parentNode.removeChild(liNode4)

//    - `innerHTML`
//    - `appendChild`
//    - `parentNode`
//    - `removeChild`
// - 8.5	Propiedades de los nodos
