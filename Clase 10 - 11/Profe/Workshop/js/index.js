console.log('Initi app')

var LS_KEY = 'studentsList'

// Carga incial de la appp
var localList = getLocalList(LS_KEY)

var mainListNode = document.getElementById('mainList')

var newStudentsList = []

var localStudent
var newStudent

for (var i = 0; i < localList.length; i++) {
  localStudent = localList[i]
  newStudent = new Student(
    localStudent.firstName,
    localStudent.lastName,
    localStudent.dni,
    localStudent.email
  )
  newStudentsList.push(newStudent)

  var liNode = createStudentNode(newStudent)

  mainListNode.appendChild(liNode)
}

// Levantar nombre y validarlo

var firstNameInputNode = document.getElementById('firstName')

firstNameInputNode.onblur = validateEmptyField

function validateEmptyField (event) {
  var inputNode = event.target

  if (!inputNode.value) {
    // Caso incorrecto
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  } else {
    // Caso correcto
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }

  validateButton()
}

// Levantar el dni y validarlo

var dniInputNode = document.getElementById('dni')

dniInputNode.onblur = validateDniField

function validateDniField (event) {
  var inputNode = event.target

  var parsedValue = parseInt(inputNode.value, 10)

  if (
    !inputNode.value ||
    isNaN(parsedValue) ||
    parsedValue <= 0 ||
    searchStudentIndexByDni(inputNode.value, newStudentsList) !== -1
  ) {
    // Caso incorrecto
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  } else {
    // Caso correcto
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }

  validateButton()
}

// Función que valida si habilitar o no el botón de agregar

var addStudentButtonNode = document.getElementById('addStudentButton')

function validateButton () {
  var isValidInputNodes = document.getElementsByClassName('is-valid')

  if (isValidInputNodes.length === 2) {
    addStudentButtonNode.disabled = false
  } else {
    addStudentButtonNode.disabled = true
  }
}

// Función que agrega estudiante

addStudentButtonNode.onclick = addStudent

function addStudent (event) {
  var firstName = firstNameInputNode.value
  var dni = dniInputNode.value

  var newStudent = new Student(firstName, null, dni, null)

  newStudentsList.push(newStudent)

  var liNode = createStudentNode(newStudent)

  mainListNode.appendChild(liNode)

  setLocalList(LS_KEY, newStudentsList)

  // Limpieza del formulario
  firstNameInputNode.value = ''
  dniInputNode.value = ''

  firstNameInputNode.classList.remove('is-valid')
  dniInputNode.classList.remove('is-valid')

  addStudentButtonNode.disabled = true
  console.log(newStudentsList)
}

// Función que busqued un dni

function searchStudentIndexByDni (dni, studentsList) {
  var index = -1
  for (var i = 0; i < studentsList.length; i++) {
    var student = studentsList[i]
    if (student.dni === dni) {
      index = i
      break
    }
  }
  return index
}

// Funcion desafío clase 08

/**
 * Función que devuelve nodos li
 * @param { Student } newStudent
 * @returns Node
 */
function createStudentNode (newStudent) {
  // Creo el nodo li
  var liNode = document.createElement('li')

  // Le setteo el id al nodo
  liNode.id = newStudent.getId()

  // Le setteo la clase al nodo
  liNode.className = 'list-group-item'

  // Le agrego el contenido al nodo
  liNode.innerHTML =
    '<h1>' +
    newStudent.getFullName() +
    '</h1><h3>DNI:' +
    newStudent.dni +
    '</h3><p>E-mail:' +
    newStudent.email +
    '</p>'

  // Devuelvo solo el nodo con todos sus datos
  return liNode
}

// Función desafío clase 05

// Función constructora

function Student (firstName, lastName, dni, email) {
  // Propiedades privadas
  var id = dni

  // Propiedades públicas
  this.firstName = firstName

  if (lastName) {
    this.lastName = lastName
  }

  this.dni = dni

  if (email) {
    this.email = email
  }

  // Métodos públicos
  this.getId = function () {
    return id
  }

  this.getFullName = function () {
    return (this.firstName || '') + ' ' + (this.lastName || '')
  }
}

// Función desafío clase 07
/**
 * Defino la función getLocalList
 * @param { string } key 
 */
function getLocalList (key) {
  // Valido que reciba un string
  if (typeof key === 'string') {
    // Trato de recuperar la lista del localStorage
    var localList = localStorage.getItem(key)
    if (localList) {
      // Si la lista existía la tranformo en JavaScript y la devuelvo
      var parsedList = JSON.parse(localList)
      return parsedList
    } else {
      // Sino existía devuelvo un array vacío
      return []
    }
  }
}

/**
 * Defino la función setLocalList
 * @param { string } key 
 * @param { array } list 
 */
function setLocalList (key, list) {
  // Verifico los parámetros recibidos
  if (typeof key === 'string' && Array.isArray(list)) {
    // Convierto a JSON el array
    var strList = JSON.stringify(list)
    // Guardo en el localStorage pisando la key
    localStorage.setItem(key, strList)
  }
}
