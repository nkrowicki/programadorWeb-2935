// Métodos de String y Array

// - Validación de tipo de valor mediante typeof

// var pato = 2

// if (typeof pato === 'string') {
//   console.log('Es un string')
//   console.log(pato)
// } else {
//   console.log('No es string')
// }

// - Métodos de String
// length

// var text = 'No te duermas Ramiro!!!'

// console.log(text.length)

// indexOf

// var email = prompt('Ingrese un mail valido')

// if (email.indexOf('@') > 2 && email.indexOf('.') !== -1) {
//   console.log('Es un email valido')
// } else {
//   console.log('Email no valido')
// }

// toLowerCase

// var text = 'PEPE'

// console.log(text.toLowerCase())

// toUpperCase

// var text = 'pepÉ'

// console.log(text.toUpperCase(), text)

// var yourName = prompt('Ingresá tu nombre')

// if (typeof yourName === 'string') {
//   if (yourName.toLowerCase() === 'juan') {
//     console.log('Te llamas Juan')
//   }
// }

// split

// var students = 'Marcela, Ramiro, contanza, Enzo, Agustín'

// console.log(students.split(','))

// - Validación de Array mediante Array.isArray()

// if (Array.isArray([ 1, 2, 3 ])) {
//   console.log('Es un Array')
// }

// - Métodos de Array
// length

// var numbers = [ 1, 2, 3 ]

// if (Array.isArray(numbers)) {
//   console.log('Es un Array y tiene ' + numbers.length + ' elementos')
// }

// toString

// var numbers = [ 1, 2, 3 ]

// console.log('Hola ' + numbers)
// console.log(numbers.toString())

// join

// var students = [ 'Marcela', 'Ramiro', 'Contanza', 'Enzo', 'Agustín' ]

// console.log(students.join(' | '))

// push

// var students = [ 'Marcela', 'Ramiro', 'Contanza', 'Enzo', 'Agustín' ]

// students.push('Alicia')

// console.log(students)

// slice

// var students1 = [ 'Marcela', 'Ramiro', 'Contanza', 'Enzo', 'Agustín' ]

// var students2 = students1.slice()

// students2[1] = 'Alicia'

// console.log(students1 === students2)

// console.log('Primer Array ', students1)
// console.log('Segundo Array ', students2)

// splice

// var students1 = [ 'Marcela', 'Ramiro', 'Contanza', 'Enzo', 'Agustín' ]

// students1.splice(0, 1)

// console.log(students1)

// sort

var students = [
  {
    firstName: 'Marcela'
  },
  {
    firstName: 'Ramiro'
  },
  {
    firstName: 'Agustín'
  }
]

students.sort(compare)

function compare (a, b) {
  if (a.firstName < b.firstName) {
    return -1
  }
  if (a.firstName > b.firstName) {
    return 1
  }
  // a must be equal to b
  return 0
}

console.log(students)

function deleteElement (index, elements) {}

var numbers = [ 1, 2, 3, 4, 5 ]

deleteElement(2, numbers)
