//-----------------------------Start clase5
// Datos
// var students = [{
//     firstName: 'Juan',
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

//saveLocalList('studentsList', studentsList)


//-----------Fin Desafio

//-----------Inicio Ejercicio

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
//setLocalList('studentsList', studentsList)


//-----------Fin Ejercicio
//-----------------------------Fin clase7



//------------------------------Inicio clase8

// Datos de la clase 5
var studentsList = [{
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

setLocalList('studentsList', studentsList)


//------------------- Fin clase8









//App start




window.onload = () => {

  //Recibe una palabra y solo devuelve true si es una palabra (letras)
  let isWord = (word) => {
    if (/^[a-zA-Z]+$/.test(word)) return true
    else return false
  }

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

  //Recibe un array de objetos 'students' y los muestra
  let viewStudents = (students) => {

    let d = document

    let mainList = d.getElementById('mainList')
    mainList.className = 'list-group'
    mainList.style.maxWidth = '400px'


    students.forEach((student) => {
      let studentNode = createStudentNode(student)
      // Add child to DOM-> ul (mainList)
      mainList.appendChild(studentNode)
    })

  }


  //Devuelve un nodo listo para incrustar
  let createStudentNode = (alumn) => {

    let d = document
    //Create element 'li'
    let liNode = d.createElement('li')
    // Add class 
    liNode.className = 'list-group-item';
    //Aux Element
    let auxElement
    let flagName = false

    //Iterando un objeto usando foreach, devuelve un nodo listo para agregar
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

  //Cargar lo del localstorage y mostrarlo
  let refreshList = () => {
    let students = getLocalList('studentsList') // Debe devolver siempre un Array [] vacío o con elementos [...]
    viewStudents(students)
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

  //Funcion que valida el campo
  //incorrecto-> Colorea en rojo el campo incorrecto y Deshabilita el botón 'Agregar Alumno'
  //correcto- > Habilita el botón 'Agregar alumno'
  let validateField = (e) => {

    let dni = document.getElementById('dni'),
      firstName = document.getElementById('firstName'),
      btnAddAlumn = document.getElementById('addStudentButton'),
      dataInput = e.target.value

    switch (e.target.id) {

      case 'dni':
        //Check dni
        parsedValue = parseInt(dataInput, 10)

        if (!isNaN(dataInput) && dataInput !== null && dataInput !== '' && parsedValue > 0 && Number.isInteger(parsedValue)) {
          dni.classList.remove('is-invalid')
          dni.classList.add('is-valid')
        } else {
          dni.classList.remove('is-valid')
          dni.classList.add('is-invalid')
        }

        break;

      case 'firstName':
        //Check firstName

        if (dataInput !== null && dataInput !== '' && isWord(dataInput)) {
          firstName.classList.remove('is-invalid')
          firstName.classList.add('is-valid')
        } else {
          firstName.classList.remove('is-valid')
          firstName.classList.add('is-invalid')
        }

        break;

      default:
        break;
    }

    if (firstName.classList.contains('is-valid') && dni.classList.contains('is-valid')) {
      btnAddAlumn.disabled = false
    } else {
      btnAddAlumn.disabled = true
    }
  }

  //Valida dni y asigna al input correspondiente la clase correspondiente (is-invalid o is-valid)
  let validateDni = (e) => {
    let element = e.target,
      dataInput = element.value
    //Check dni
    parsedValue = parseInt(element.value, 10)

    if (!isNaN(dataInput) && dataInput !== null && dataInput !== '' && parsedValue > 0 && Number.isInteger(parsedValue)) {
      element.classList.remove('is-invalid')
      element.classList.add('is-valid')
    } else {
      element.classList.remove('is-valid')
      element.classList.add('is-invalid')
    }
  }

  //Funcion resetear todos los formularios
  let resetForm = () => {

    let forms = document.getElementsByTagName('form')

    //Resetear todos los inputs y deshabilitar botones
    Array.from(forms).forEach(form => {

      form.reset()

      let btn = form.getElementsByTagName('button')

      //Desabilitar todos los botones
      Array.from(btn).forEach(btn => {
        btn.disabled = true

      });

    });

  }


  //Devuelve un array con lo que hay en el localstorage 'name'
  let getLocalList = (name) => {

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

  //If dni exists on localStorage return false
  //Else return true
  let studentExist = (dni, itemStorage) => {

    let students = getLocalList(itemStorage),
      BreakException = {},
      flag = true

    //Lo hacemos con try para simular un 'break'.
    //No exite el break en un forEach y para interrumpir
    //la ejecucion debemos hacer un 'throw'
    try {
      students.forEach((student) => {

        if (parseInt(dni, 10) == parseInt(student.dni, 10)) {
          flag = false
          throw 'Break'
        }

      })
    } catch (e) {
      if (e !== 'Break') throw e
    }

    return flag
  }




  // Linea de abajo ejecutar cuando se hace click en 'Agregar Alumno'
  let newStudent = getFormValues()
  // if (!studentExist(newStudent.dni)) {
  //   //Agregamos esto al localstorage
  // }


  //Activa o desactiva el boton recibido por parametro según las clases que tiene que tener los campos correspondientes
  let activeBtn = (button) => {
    let btn = document.getElementById(button),
      flag = false


    switch (button) {
      case 'deleteStudentButton':
        flag = document.getElementById('deleteDni').classList.contains('is-valid')
        break;

      case 'addStudentButton':
        break;

      case 'searchStudentButton':
        break;

      default:
        break;
    }

    if (flag) btn.disabled = false


    console.log(btn)

  }





  //Evento onkeydown de los input
  document.getElementById('firstName').onkeydown = validateField;
  document.getElementById('dni').onkeydown = validateField;
  document.getElementById('deleteDni').onkeydown = validateDni;

  //Resetear formularios
  resetForm()
  //Refrescar lista de estudiantes (extraida del localstorage)
  refreshList()

  //Pendiente: 
  // - Arreglar para que queden funciones ordenadas de firstname y dni, cambiar el validateField por validateDni y crear un validateName o similar
  //- El item 2 usando lo de abajo y crear funcion validate Dni (separar de validate Field)
  console.log(studentExist('45678956', 'studentsList'))

  activeBtn('deleteStudentButton')


}