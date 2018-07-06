//--EX--------------------------------------------
// function esDiaHabil(dia) {
//   switch (dia) {
//     case 'Lunes':
//     case 'Martes':
//     case 'Miércoles':
//     case 'Miercoles':
//     case 'Jueves':
//     case 'Viernes':
//       return (dia + ' es un dia habil')
//       break;
//     case 'Sábado':
//     case 'Sabado':
//     case 'Domingo':
//       return (dia + ' es un dia no habil')
//       break;
//     case 'Pato':
//       console.log('---------> ' + dia + '?????!!!  Basta de patos!! <-----------------')
//     default:
//       return (dia + ' No es ningun dia de la semana')
//   }
// }

// var daysOfTheWeek = [
//   'Lunes',
//   'Martes',
//   'Miércoles',
//   'Miercoles',
//   'Jueves',
//   'Viernes',
//   'Sábado',
//   'Sabado',
//   'Domingo',
//   'Pato'
// ]


// //Forma 1
// console.log("------ Forma 1 ------")
// for (i = 0; i < daysOfTheWeek.length; i++) {
//   console.log(esDiaHabil(daysOfTheWeek[i]))
// }

// //Forma 2
// console.log("\n------ Forma 2 ------")
// daysOfTheWeek.forEach(function (dia) {
//   console.log(esDiaHabil(dia))

// })
//--FIN EX--------------------------------------------




// - Pedir al usuario mediante `prompt` que ingrese su género y luego su edad. 
// Luego mostrar un mensaje en consola que diga `Sr.`, `Sra.` o `Sx.`según corresponda y que también evalue si es mayor de edad o no al momento de construir el mensaje.

// Por ejemplo si el usuario ingresa `male` y `16`, el mensaje debería ser `Sr. usted es menor de edad no puede ingresar`,
//  si ingresa `female` y `34`el mensaje sería `Sra. usted es mayor de edad puede ingresar`.

var genero = prompt("Ingrese su genero (hombre o mujer)")
var edad = prompt("Ingrese su edad")
var msg

console.log(genero, edad)

if (genero === 'hombre' || genero === 'Hombre') msg = "Sr. "
else if (genero === 'mujer' || genero === 'mujer') msg = "Sra. "
else msg = "Srx. "

if (edad >= 18) msg += "Usted es mayor de edad y puede ingresar"
else msg += "Usted es menor de edad, no puede ingresar"

console.log(msg)