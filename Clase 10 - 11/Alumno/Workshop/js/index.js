/**
 * Defino la función setLocalList
 * @param { string } key 
 * @param { array } list 
 */


//App start


window.onload = () => {

  //Recibe una palabra y solo devuelve true si es una palabra (letras)
  let isWord = (word) => {
    if (/^[a-zA-Z]+$/.test(word)) return true
    else return false
  }

  //Funcion que devuelve true si el correo es correcto o caso contrario false
  function validateEmail(email) {
    var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    return re.test(email);
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
    let flagName = false,
      //flag usado para saber si hay que tener en cuenta ese valor para crear el elemento y hacer appenchild
      flagAdd = true

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

        case 'mail':
          auxElement = d.createElement('p')
          auxElement.innerHTML = 'Email: '
          break;

        default:
          flagAdd = false
          break;
      }

      if (flagAdd) {
        auxElement.innerHTML += value
        liNode.appendChild(auxElement)
      }
    });
    return liNode
  }

  //Limpiar la lista de estudiantes de la pantalla (Vaciar html)
  let clearList = (lista) => {
    var myList = document.getElementById(lista);
    myList.innerHTML = '';
  }

  //Cargar lo del localstorage y mostrarlo
  let refreshList = () => {
    clearList('mainList')
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
  //incorrecto->Agrega clase is-invalid al input en cuesion
  //correcto- > Agrega clase is-valid al input en cuesion
  let validateField = (e) => {

    let element = e.target,
      dataInput = element.value,
      flag = false

    if (dataInput !== null && dataInput !== '') {

      switch (element.id) {

        case 'dni':
        case 'deleteDni':
          //Check dni
          parseValue = parseInt(element.value, 10)

          if (!isNaN(dataInput) && parseValue > 0 && Number.isInteger(parseValue)) {
            flag = true
          }

          //Si ya existe el dni..
          if (element.id === 'dni') {
            if (!studentExist(parseValue, 'studentsList')) flag = false
          }

          break;

        case 'firstName':
        case 'searchText':
          //Check firstName

          if (isWord(dataInput)) {
            flag = true
          }
          break;

        case 'email':
          if (validateEmail(dataInput)) {
            flag = true
          }
          break;

        default:
          break;
      }

    } //if

    //Usamos el flag para agregar/sacar clase al elemento input
    if (flag) {
      element.classList.remove('is-invalid')
      element.classList.add('is-valid')
    } else {
      element.classList.remove('is-valid')
      element.classList.add('is-invalid')
    }

    switch (element.id) {

      case 'dni':
      case 'firstName':
      case 'email':

        activeBtn('addStudentButton')

        break;
      case 'searchText':
        activeBtn('searchStudentButton')
        break;

      case 'deleteDni':

        activeBtn('deleteStudentButton')

        break;


      default:
        break;
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
        // btn.onsubmit = (e) => {
        //   e.preventDefault()
        // }

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

  let saveLocalList = (key, value) => {

    if (key !== null && typeof key === 'string' && value !== null && Array.isArray(value)) {
      try {
        //Convierto a json el array
        value = JSON.stringify(value)
        // Guardo en el localStorage pisando la key
        localStorage.setItem(key, value)
      } catch (e) {
        console.log(e)
      }
    }
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

  //Activa o desactiva el boton recibido por parametro según las clases que tiene que tener los campos correspondientes
  let activeBtn = (button) => {
    let btn = document.getElementById(button),
      flag = false

    switch (button) {
      case 'deleteStudentButton':
        flag = document.getElementById('deleteDni').classList.contains('is-valid')
        break;

      case 'addStudentButton':
        flag = document.getElementById('firstName').classList.contains('is-valid')
        if (flag) flag = document.getElementById('dni').classList.contains('is-valid')
        if (flag) flag = document.getElementById('email').classList.contains('is-valid')
        break;

      case 'searchStudentButton':
        flag = document.getElementById('searchText').classList.contains('is-valid')
        break;

      default:
        break;
    }

    if (flag) {
      btn.disabled = false
    } else {
      btn.disabled = true
    }

  }

  // Funcion agregar alumno
  let addAlumn = () => {

    let flag = false

    let newStudent = getFormValues()
    if (studentExist(newStudent.dni, 'studentsList')) {

      flag = true
      //Obtenemos lo que hay en el localList
      let students = getLocalList('studentsList') // Debe devolver siempre un Array [] vacío o con elementos [...]
      //Agregamos el nuevo estudiante
      students.push(newStudent)
      //Guardamos la nueva lista de estudiantes en el localList
      saveLocalList('studentsList', students)
    }


    if (flag) refreshList()

  }

  let deleteAlumn = () => {


    let flag = false,
      flagIndex = -1,
      dni = document.getElementById('deleteDni').value

    // Si el estudiante existe...
    if (!studentExist(dni, 'studentsList')) {

      flag = true

      //Obtenemos lo que hay en el localList
      let students = getLocalList('studentsList') // Debe devolver siempre un Array [] vacío o con elementos [...]
      students.forEach((student, i) => {

        if (parseInt(dni, 10) == parseInt(student.dni, 10)) {
          //Eliminar este estudiante
          flagIndex = i
        }
      })

      //filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
      const newList = students.filter((students, index) => index != flagIndex);
      saveLocalList('studentsList', newList)
    }

    if (flag) refreshList()

  }

  //Busca un estudiante coincidencias en nombre o apellido.
  //Muestra los que coincidan con lo que ingreso el usuario
  //Lo hace trabajando sobre el dom 
  let searchAlumn = () => {

    // Declare variables
    let input = document.getElementById('searchText'),
      filter = input.value.toUpperCase(),
      ul = document.getElementById("mainList"),
      li = ul.getElementsByTagName('li'),
      flagAux = -1

    // Loop through all list items, and hide those who don't match the search query
    Array.from(li).forEach((element, i) => {

      console.log(element.getElementsByTagName('h1')[0].innerHTML)

      let a = element.getElementsByTagName('h1')[0]

      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }) //foreach

  }


  //Eventos de input
  document.getElementById('firstName').onkeyup = validateField;
  document.getElementById('dni').onkeyup = validateField;
  document.getElementById('deleteDni').onkeyup = validateField;
  document.getElementById('email').onkeyup = validateField;
  document.getElementById('searchText').onkeyup = searchAlumn;

  //Eventos de button
  document.getElementById('addStudentButton').onclick = addAlumn;
  document.getElementById('deleteStudentButton').onclick = deleteAlumn;
  document.getElementById('searchStudentButton').onclick = searchAlumn;

  //Resetear formularios
  resetForm()
  //Refrescar lista de estudiantes (extraida del localstorage)
  refreshList()

}