//Datos de este ejercicio
var newStudent = {
  firstName: 'Juan',
  lastName: 'Peréz',
  dni: 22999333,
  email: 'juan@gmail.com'
}

// Datos de la clase 5
var students = [{
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

//Function
var createStudentNode = (alumn) => {

  //Create element 'li'
  let liNode = d.createElement('li')
  // Add class 
  liNode.className = 'list-group-item';
  //Aux Element
  let auxElement
  let flagName = false

  //Iterando un objeto usando foreach
  // Object.entries devuelve una matriz de pares propios de una propiedad enumerable [key, value]
  //  de un objeto dado, en el mismo orden que es proporcionado por for...in 
  // (La diferencia es que un bucle for-in enumera las propiedades en la cadena de prototype). 

  Object.entries(alumn).forEach((element, i) => {
    const [key, value] = element;

    switch (key) {

      case 'firstName':
      case 'lastName':
        if (flagName === false) {
          auxElement = d.createElement('h1')
          flagName = true
        } else auxElement.innerHTML += ' '
        break;

      case 'dni':
        auxElement = d.createElement('h3')
        auxElement.innerHTML = 'DNI: '
        liNode.className += ' ' + value
        break;

      case 'email':
        auxElement = d.createElement('p')
        auxElement.innerHTML = 'Email: '
        break;

      default:
        auxElement = d.createElement('p')
        break;
    }

    auxElement.innerHTML += value
    liNode.appendChild(auxElement)
  });
  return liNode
}

let d = document

let mainList = d.getElementById('mainList')
mainList.className = 'list-group'
mainList.style.maxWidth = '400px'

// ---------- DATOS DE ESTA CLASE ----------------
var studentNode = createStudentNode(newStudent)
// Add child to DOM-> ul (mainList)
mainList.appendChild(studentNode)

// ---------- DATOS DE LA CLASE 5 ----------------
students.forEach((student) => {
  var studentNode = createStudentNode(student)
  // Add child to DOM-> ul (mainList)
  mainList.appendChild(studentNode)

});