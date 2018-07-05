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

var lastNameInputNode = document.getElementById('lastName')

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

// Levantar el email y validarlo

var emailInputNode = document.getElementById('email')

emailInputNode.onblur = validateEmailField

function validateEmailField (event) {
  var inputNode = event.target

  if (
    !inputNode.value ||
    inputNode.value.indexOf('@') == -1 ||
    inputNode.value.indexOf('.') == -1
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

  if (isValidInputNodes.length === 3) {
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
  var lastName = lastNameInputNode.value
  var email = emailInputNode.value

  var newStudent = new Student(firstName, lastName, dni, email)

  newStudentsList.push(newStudent)

  var liNode = createStudentNode(newStudent)

  mainListNode.appendChild(liNode)

  setLocalList(LS_KEY, newStudentsList)

  // Limpieza del formulario
  firstNameInputNode.value = ''
  dniInputNode.value = ''
  lastNameInputNode.value = ''
  emailInputNode.value = ''

  firstNameInputNode.classList.remove('is-valid')
  dniInputNode.classList.remove('is-valid')
  lastNameInputNode.classList.remove('is-valid')
  emailInputNode.classList.remove('is-valid')

  addStudentButtonNode.disabled = true
}

// Levanto el campo de borrado por dni y lo valido

var deleteDniInputNode = document.getElementById('deleteDni')

deleteDniInputNode.onblur = validateDeleteDniField

var deleteStudentButton = document.getElementById('deleteStudentButton')

function validateDeleteDniField (event) {
  var inputNode = event.target

  if (!inputNode.value) {
    // Caso incorrecto
    inputNode.classList.add('is-invalid')
    deleteStudentButton.disabled = true
  } else {
    // Caso correcto
    inputNode.classList.remove('is-invalid')
    deleteStudentButton.disabled = false
  }
}

// Función que elimina un estudiante

deleteStudentButton.onclick = deleteStudent

function deleteStudent () {
  var dni = deleteDniInputNode.value

  var index = searchStudentIndexByDni(dni, newStudentsList)

  if (index !== -1) {
    var studentNode = document.getElementById(dni)

    mainListNode.removeChild(studentNode)

    newStudentsList.splice(index, 1)

    setLocalList(LS_KEY, newStudentsList)
  }

  deleteDniInputNode.value = ''
  deleteStudentButton.disabled = true
}

// Función que busca estudiante

var searchTextInputNode = document.getElementById('searchText')

var searchStudentButton = document.getElementById('searchStudentButton')

var searchListNode = document.getElementById('searchList')

searchStudentButton.onclick = searchStudent

function searchStudent () {
  var text = searchTextInputNode.value

  searchListNode.innerHTML = ''

  var index = searchStudentIndexByText(text, newStudentsList)

  if (index !== -1) {
    var liNode = createStudentNode(newStudentsList[index])

    searchListNode.appendChild(liNode)
  }
}

// Función que busque un dni

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

// Clase 05 combinada con la de la clase 07

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
      includesText(nameOrLastName, student.firstName) ||
      includesText(nameOrLastName, student.lastName)
    ) {
      index = i
      break
    }
  }
  return index
}

// Clase 07

function includesText (text, baseText) {
  // Valido que ambos parámetros sean string
  if (typeof text === 'string' && typeof baseText === 'string') {
    // Verifico si el primer parámetro se encuentra dentro del segundo
    var textUpperCase = text.toUpperCase()
    var baseTextUpperCase = baseText.toUpperCase()
    if (baseTextUpperCase.indexOf(textUpperCase) !== -1) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}
