// 1. Condicionales
// - ìf

console.log('Init app')

// Falsy values

// Boolean: false
// Number: 0, -0, NaN
// String: ''
// undefined, null

// var value = []

// if (value) {
//   console.log('Estoy adentro')
// }

// console.log('Estoy afuera')

// var name = prompt('Ingresa tu nombre')

// if (name) {
//   console.log('Hola ' + name)
// } else {
//   name = prompt('Esta vez escribilo!')
//   if (name) {
//     console.log('Hola ' + name)
//   } else {
//     console.log('No escribiste nada dos veces!')
//   }
// }
// 2. Operadores de comparación
// - ===

// var result = prompt('Ingrese resultado', 'Ganó, Empató o Perdió')

// if ('Ganó' === result) {
//   console.log('Sumaste 3 puntos')
// } else {
//   if ('Empató' === result) {
//     console.log('Sumaste 1 punto')
//   } else {
//     if ('Perdió' === result) {
//       console.log('Sumaste 0 puntos')
//     } else {
//       console.log('Resultado no correcto')
//     }
//   }
// }

// - !==

// var value = prompt('Ingrese un número')

// var parsedValue = parseFloat(value, 10)

// if (parsedValue !== 2) {
//   console.log('El valor es distinto de 2')
// } else {
//   console.log('Es valor es igual a 2')
// }

// - <
// - >
// - >=
// - <=

// var value = prompt('Ingrese un número')

// if (value < 0) {
//   console.log('Es menor a cero', value)
// } else {
//   console.log('Es cero o mayor', value)
// }

// var name = prompt('Ingrese un número')

// if (name <= 'Pepe') {
//   console.log('Esta antes en la tabla ASCII')
// } else {
//   console.log('Esta después en la tabla ASCII')
// }

// 3. Operadores lógicos

// var value = prompt('Ingrese un número')

// - &&

// if (value > 1 && value < 10) {
//   console.log('El número está entre 1 y 10 no incluidos')
// }

// - ||

// var gender = prompt('Ingresa male o female')

// if (gender === 'male' || gender === 'female') {
//   console.log('Declaraste genero')
// } else {
//   console.log('Genero no definido dentro de las variables heteronormativas')
// }

// - !

// var name = prompt('Ingresá nombre')

// if (!name) {

// }

// - switch

// var result = prompt('Ingrese resultado', 'Ganó, Empató o Perdió')

// switch (result) {
//   case 'Ganó':
//   case 'ganó':
//   case 'Gano':
//   case 'gano':
//     console.log('Sumaste 3 puntos')
//     break
//   case 'Empató':
//     console.log('Sumaste 1 punto')
//     break
//   case 'Pedrió':
//     console.log('Sumaste 0 puntos')
//     break
//   default:
//     console.log('Resultado no correcto')
//     break
// }

// if ('Ganó' === result) {
//   console.log('Sumaste 3 puntos')
// } else {
//   if ('Empató' === result) {
//     console.log('Sumaste 1 punto')
//   } else {
//     if ('Perdió' === result) {
//       console.log('Sumaste 0 puntos')
//     } else {
//       console.log('Resultado no correcto')
//     }
//   }
// }
