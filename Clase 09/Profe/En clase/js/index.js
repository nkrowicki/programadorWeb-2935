// NO ES PARTE DE LA CLASE DE HOY
// function calcDolarValue (valueToday) {
//   return function (valueInput) {
//     return valueToday * valueInput
//   }
// }

// var fixedToday1 = calcDolarValue(27.08)

// console.log(fixedToday1(10))

// console.log(fixedToday1(100))

// var fixedToday2 = calcDolarValue(35)

// console.log(fixedToday2(10))

// console.log(fixedToday2(100))

// HASTA ACÁ

// var mainList = document.getElementById('main-list')

// var liNode = document.createElement('li')

// liNode.id = '2'

// liNode.innerHTML = '2'

// var liNode3 = document.getElementById('3')

// mainList.insertBefore(liNode, liNode3)

// var nodeButton1 = document.getElementById('button1')

// nodeButton1.onclick = showMessage

// var nodeButton2 = document.getElementById('button2')

// nodeButton2.onclick = showMessage

// nodeButton2.onmouseover = showMessage

// var nodeYellowSubmarine = document.getElementById('yellow-submarine')

// nodeYellowSubmarine.onclick = showMessage

// function showMessage (event) {
//   var node = event.target
//   if (node.id === 'button1') {
//     console.log('Apretaste el botón rojo')
//   } else if (node.id === 'button2') {
//     console.log('Apretaste el botón azul', event.type)
//   } else if (node.id === 'yellow-submarine') {
//     node.className = 'Pepe'
//     node.innerHTML = 'Pato'
//     console.log('Clickeaste el div')
//   }
// }

// function showMessage (name) {
//   console.log('Hola ' + name)
// }

// showMessage('Adrián')

// showMessage('Magdalena')

var inputPasswordNode = document.getElementById('inputPassword')

inputPasswordNode.onblur = validatePassword

function validatePassword (event) {
  var node = event.target

  // var values = node.value.split('a')

  // console.log(values)
  console.log(node.value)
  if (node.value.length >= 6) {
    console.log('Contraseña correcta', node.value)
    node.classList.remove('is-invalid')
    node.classList.add('is-valid')
  } else {
    console.log('Contraseña muy corta', node.value)
    node.classList.remove('is-valid')
    node.classList.add('is-invalid')
  }
}

var deleteButtonNode = document.getElementById('deleteButton')

deleteButtonNode.onclick = clearInputs

function clearInputs (event) {
  inputPasswordNode.value = ''
  console.log('Borro contenido')
}
