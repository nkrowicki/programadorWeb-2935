//-----------------------------Start clase5
// Datos
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


//-----------------------------Fin clase5


//-----------------------------Inicio clase7
//------------------------Inicio Desafio

var saveLocalList = (key, value) => {

  if (key !== null && value !== null) {
    try {
      value = JSON.stringify(value)
      localStorage.setItem(key, value)
    } catch (e) {
      console.log(e)

    }
  }
}

var getLocalList = (name) => {

  data = localStorage.getItem(name)

  if (data) {
    try {
      data = JSON.parse(data)
      return data
    } catch (e) {
      console.log(e)
    }
  }
  return []

}

//Ejercicio
var studentsList = ['CARLOS', 'GERONIMO', 'NICOLAS', 'LUCAS', 'MARIA', 'FEDERICO', 'ANTONIO', 'LORNA', 'JULIAN', 'DIEGO', 'DANIELA', 'JUAN', 'MATEO', 'BARBARA', 'AGUSTIN', 'MARIO', 'MARIEL', 'ANA', 'FLORENCIA']
saveLocalList('studentsList', studentsList)

//Desafio
var students = getLocalList('studentsList') // Debe devolver siempre un Array [] vacío o con elementos [...]
console.log(students)



//-----------Fin Desafio

//-----------Inicio Ejercicio
// Datos de prueba
var studentsList = [
  'CARLOS',
  'GERONIMO',
  'NICOLAS',
  'LUCAS',
  'MARIA',
  'FEDERICO',
  'ANTONIO',
  'LORNA',
  'JULIAN',
  'DIEGO',
  'DANIELA',
  'JUAN',
  'MATEO',
  'BARBARA',
  'AGUSTIN',
  'MARIO',
  'MARIEL',
  'ANA',
  'FLORENCIA'
]

/**
 * Defino la función setLocalList
 * @param { string } key 
 * @param { array } list 
 */
function setLocalList(key, list) {
  // Verifico los parámetros recibidos
  if (typeof key === 'string' && Array.isArray(list)) {
    // Convierto a JSON el array
    var strList = JSON.stringify(list)
    // Guardo en el localStorage pisando la key
    localStorage.setItem(key, strList)
  }
}

// Pruebo la función
setLocalList('studentsList', studentsList)


//-----------Fin Ejercicio
//-----------------------------Fin clase7



//------------------------------Inicio clase8

//Datos de este ejercicio
// var newStudent = {
//   firstName: 'Juan',
//   lastName: 'Peréz',
//   dni: 22999333,
//   email: 'juan@gmail.com'
// }

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
// var studentNode = createStudentNode(newStudent)

// -------------Add child to DOM-> ul (mainList)
// mainList.appendChild(studentNode)

// // ---------- DATOS DE LA CLASE 5 ----------------
// students.forEach((student) => {
//   var studentNode = createStudentNode(student)
//   // Add child to DOM-> ul (mainList)
//   mainList.appendChild(studentNode)

// });


//------------------- Fin clase8





//App start




window.onload = () => {

  //Creacion de clase Student la cual luego va a ser instanciada para crear los objetos
  class Student {

    constructor(firstName, lastName, dni, email) {
      this.firstName = firstName
      this.lastName = lastName
      this.dni = dni
      this.mail = email

      this._id = dni
    }

    getId() {
      return this._id
    }

    getFullName() {
      if (this.lastName !== undefined) return (this.firstName + ' ' + this.lastName)
    }
  }

  //Obtenemos los datos ingresados en el input por el usuario
  //Devuelve un objeto ya instanciado de la clase estudiante
  let getFormValues = () => {

    let
      firstName = document.getElementById('firstName').value,
      lastName = document.getElementById('lastName').value,
      dni = document.getElementById('dni').value,
      mail = document.getElementById('email').value

    let alumn = new Student(firstName, lastName, dni, mail)

    return alumn
  }

  //Funcion que chequea si los datos obligatorios están y son correctos
  //Si alguno es incorrecto-> Colorea en rojo el campo incorrecto y
  //devuelve false, caso contrario (Todos correctos) devuelve true
  let checkFormValues = (newStudent) => {

    let flag = true

    //Check firstName
    if (newStudent.firstName !== null && newStudent.firstName !== '' && isNaN(newStudent.firstName)) {
      document.getElementById('firstName').classList.remove('is-invalid')
      document.getElementById('firstName').classList.add('is-valid')
    } else {
      document.getElementById('firstName').classList.remove('is-valid')
      document.getElementById('firstName').classList.add('is-invalid')
      if (flag) flag = false
    }
    //Check dni
    parsedValue = parseInt(newStudent.dni, 10)

    if (newStudent.dni !== null && newStudent.dni !== '' && !isNaN(parsedValue) && parsedValue > 0) {
      document.getElementById('dni').classList.remove('is-invalid')
      document.getElementById('dni').classList.add('is-valid')
    } else {
      document.getElementById('dni').classList.remove('is-valid')
      document.getElementById('dni').classList.add('is-invalid')
      if (flag) flag = false
    }

    return flag
  }


  //Eventos
  document.getElementById('addStudentButton').onclick = (e) => {
    //Objeto newStudent con los datos que ingresó el usuario
    e.preventDefault

    let newStudent = getFormValues()

    if (checkFormValues(newStudent)) {
      //Agregamos esto al localstorage
    }

  }

  //Hablitar o deshabilitar el boton
  let clearFields = () => {
    let forms = document.getElementsByTagName('form')


    console.log(forms)
  }

  clearFields()

  //Cargar y mostrar lo que está en el localstorage

  //Pendiente: Linea 316 habilitar o deshabilitar boton, cargar y mostrar lo del localstorage.. etc.

}