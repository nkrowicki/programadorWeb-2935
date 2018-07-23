import {
  getLocalList,
  setLocalList
} from '../utils/localStorage'

import {
  calculateGender,
  calculateColor,
  translateMassHeight,
  createBichoNode,
  showNames,
  removeElementWithAnimation,
  getRowValues
} from '../utils/people-tools-table'

let peopleController = () => {

  let getData = (url, cbk) => {

    let request = $.ajax(url)

    request
      .done(function (data) {

        cbk(null, data)

      })
      .fail(function (error) {

        cbk(error, null)

      })
  }

  let getInfo = (error, data) => {
    if (!error) {
      showNames(data.results)
      if (data.next) $('#seeMore').unbind('click').on('click', () => getData(data.next, getInfo))
      else $('#seeMore').attr("disabled", "disabled");

    } else {
      console.log('Error: ' + error)
    }
  }

  //If key exists on localStorage return true else return true
  //Recibe 'id' y nombre de clave en localstorage (itemstorage)
  let peopleExist = (id, itemStorage) => {

    let people = getLocalList(itemStorage),
      BreakException = {},
      flag = false

    //Lo hacemos con try para simular un 'break'.
    //No exite el break en un forEach y para interrumpir
    //la ejecucion debemos hacer un 'throw'
    try {
      people.forEach((people) => {

        if (parseInt(id, 10) == parseInt(people.id, 10)) {
          flag = true
          throw 'Break'
        }

      })
    } catch (e) {
      if (e !== 'Break') throw e
    }

    return flag
  }

  //Recibe el evento que desató 'click' y agarra la fila en la que se hizo click y la agrega al localStorage (si no existe)
  let addPeople = (event) => {
    let id = $(event.target).parents('tr').attr('id')

    //Variable en la cual almaceno el 'id' de la fila en cuestión
    let nameList = 'peopleList'


    if (!peopleExist(id, nameList)) {
      removeElementWithAnimation(id)

      //Obtenemos en newPeople un objeto con los valores levantados
      let newPeople = getRowValues(id)

      //Obtenemos lo que hay en el localList
      let peopleList = getLocalList(nameList) // Debe devolver siempre un Array [] vacío o con elementos [...]
      //Agregamos el nuevo personaje a la lista obtenida
      peopleList.push(newPeople)
      //Guardamos la nueva lista de personajes en el localList
      setLocalList(nameList, peopleList)
    } else {
      alert('Este peronaje ya existe!')
      event.target.disabled = 'true'
    }

  }

  //Está de esta manera el evento click por que son botones que se crearán despues de que se corran las siguientes lineas
  //The .on() method allows you to delegate any desired event handler to:
  //current elements or future elements added to the DOM at a later time.
  $('#tableBody').on('click', 'tr td .btn-success', addPeople)

  //Peticion AJAX
  let urlBase = 'https://swapi.co/api/' + 'people/'
  getData(urlBase, getInfo)

}

export default peopleController