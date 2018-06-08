'use strict'

console.log('Init app clase 04')

// # 4 Funciones

// - 4.1 ¿Que es una función?

// function showMessage () {
//   var name = 'Adrián'
//   console.log('Hola ' + name)
// }

// showMessage()

// - 4.2 Parámetros que recibe una función

// function showMessage (firstName) {
//   console.log('Hola ' + firstName)
// }

// showMessage('Marcela')
// showMessage('Magdalena')
// showMessage('Javier')
// showMessage()

// function showMessage (firstName, lastName) {
//   console.log('Hola ' + firstName + ', ' + lastName)
// }

// showMessage('Correa', 'Marcela')
// showMessage('Magdalena', 'Monserrat')
// showMessage('Javier', 'De la barrera')
// showMessage()

// function showMessage (firstName, lastName) {
//   if (firstName && !lastName) {
//     console.log('Hola ' + firstName)
//   } else if (firstName && lastName) {
//     console.log('Hola ' + firstName + ', ' + lastName)
//   } else if (!firstName && !lastName) {
//     console.log('No ingresaste los dos datos')
//   }
// }

// showMessage('Correa', 'Marcela')
// showMessage('Magdalena', 'Monserrat')
// showMessage('Javier')
// showMessage()

// - 4.3 Valores de retorno de una función

// function square (number1) {
//   var result = number1 * number1

//   return result
// }

// var number = prompt('Ingresá un número')

// var parsedNumber = parseFloat(number, 10)

// var squareResult = square(parsedNumber)

// console.log(squareResult)

// var name

// console.log(name)

// name = 'Juan'

// var number = prompt('Ingresá un número')

// var parsedNumber = parseFloat(number, 10)

// var squareResult = square(parsedNumber)

// console.log(squareResult)

// function square (number1) {
//   var result = number1 * number1

//   return result
// }

// function askAndShowSquareResult (message) {
//   var number1 = prompt(message)

//   var parsedNumber1 = parseFloat(number1, 10)

//   var squareResult1 = square(parsedNumber1)

//   console.log('Los resultado es: ' + squareResult1)
// }

// askAndShowSquareResult('Ingrese el primer número')

// askAndShowSquareResult('Ingrese el segundo número')

// askAndShowSquareResult('Ingrese tu edad')

// var number1 = prompt('Ingres el primer número')

// var parsedNumber1 = parseFloat(number1, 10)

// var number2 = prompt('Ingrese el segundo número')

// var parsedNumber2 = parseFloat(number2, 10)

// var squareResult1 = square(parsedNumber1)

// var squareResult2 = square(parsedNumber2)

// console.log('Los resultado es: ' + squareResult1)

// console.log('Los resultado es: ' + squareResult2)

// Calcula el cuadrado de un número

// function square (number1) {
//   var result = number1 * number1

//   return result
//   console.log('--------') // Código no alcanzado
// }

// function askAndParse (message) {
//   // Pido el primer número
//   var number1 = prompt(message)

//   var parsedNumber1 = parseFloat(number1, 10)

//   return parsedNumber1
// }

// var students1 = [ 'Costanza', 'Javier', 'Marcela', 'Ramiro', 'Enzo' ]

// var students2 = [ 'Magdalena', 'Alicia' ]

// showStudentsNames(students1)

// console.log('--------')

// showStudentsNames(students2)

// function showStudentsNames (students) {
//   var student

//   for (var i = 0; i < students.length; i++) {
// student = students[i]

//     console.log(student)
//   }
// }

// var obj = {
//   firstName: 'Pepe'
// }

// console.log(obj.firstName)

// var student

// for (var i = 0; i < students.length; i++) {
//   student = students[i]
//   console.log(student)
// }

// - 4.4 Scope global y scope local

// var firstName = 'Adrián'

// function showMessage () {
//   console.log(firstName)
// }

// showMessage()

// var firstName

// firstName = 'Adrián'

// function showMessage () {
//   var firstName

//   firstName = 'Diana'

//   console.log(firstName)
// }

// showMessage()

// console.log(firstName)
