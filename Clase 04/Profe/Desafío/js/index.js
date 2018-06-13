// Datos de estudiantes para usar como carga incial

var students = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
]

/**
 * Función que permite buscar la posición de un estudiante en el array,
 * comparando nombre o apellido por valor exacto
 * @param {String} nameOrLastName 
 * @param {Array} studentsList 
 */

function searchStudentIndexByText (nameOrLastName, studentsList) {
  var index = -1
  for (var i = 0; i < studentsList.length; i++) {
    var student = studentsList[i]
    if (
      student.firstName === nameOrLastName ||
      student.lastName === nameOrLastName
    ) {
      index = i
      break
    }
  }
  return index
}

// PRUEBA: Hago una prueba para ver si la función hace lo que espero

// Pido el texto al usuario

var text = prompt('Ingrese un nombre')

// Llamo a la función definida anteriormente

var index = searchStudentIndexByText(text, students)

// Evaluo el valor devuelto por la función y según eso muestro un mensaje en consola

if (index !== -1) {
  console.log('Se encontró el estudiante en la posición')
  console.log(students[index])
} else {
  console.log('No se pudo encontrar el estudiante')
}
