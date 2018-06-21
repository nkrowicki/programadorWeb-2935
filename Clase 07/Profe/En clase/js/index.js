// function showName () {
//   var firstName

//   firstName = localStorage.getItem('userName')

//   if (!firstName) {
//     firstName = prompt('Ingresá tu nombre')
//     localStorage.setItem('userName', firstName)
//   }

//   console.log('Hola ' + firstName)
// }

// showName()

// var students = [
//   {
//     firstName: 'Juancito',
//     lastName: 'Pérez',
//     dni: 45678987,
//     email: 'juan@gmail.com'
//   },
//   {
//     firstName: 'Ana',
//     lastName: 'Fernandez',
//     dni: 45678989,
//     email: 'ana@gmail.com'
//   },
//   {
//     firstName: 'Pedro',
//     lastName: 'Mármol',
//     dni: 45678956,
//     email: 'pedro@gmail.com'
//   }
// ]

// var stringifyStudents = JSON.stringify(students)

// localStorage.setItem('list', stringifyStudents)

// var savedStudents = localStorage.getItem('list') // 01

// var studentsList = JSON.parse(savedStudents) // 02

// studentsList.splice(0, 1) // 03_B

// var stringyList = JSON.stringify(studentsList) // 04

// localStorage.setItem('list', stringyList) // 05

// for (var i = 0; i < studentsList.length; i++) {
//   console.log(studentsList[i].firstName)
// }

console.log('Hola 1')

setTimeout(function () {
  console.log('Hola 2')
}, 0)

console.log('Hola 3')
