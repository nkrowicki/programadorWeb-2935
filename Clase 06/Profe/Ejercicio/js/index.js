// Datos de prueba

var students = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987,
    email: 'juan@gmail.com'
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989,
    email: 'ana@gmail.com'
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956,
    email: 'pedro@gmail.com'
  }
]

// Función para eliminar un elemento de un Array, sin modificar el Array original

function deleteElement (index, elements) {
  if (Array.isArray(elements)) {
    var elementsCopy = elements.slice()
    elementsCopy.splice(index, 1)
    return elementsCopy
  } else {
    return elements
  }
}

// Probando la función

console.log('Array copia ', deleteElement(1, students))
console.log('Array original ', students)
