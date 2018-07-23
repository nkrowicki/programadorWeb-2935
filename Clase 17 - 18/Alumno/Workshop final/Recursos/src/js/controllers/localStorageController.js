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


let localStorageController = () => {

  console.log('local storage CONTROLLER')

  //Recibe el evento que desató 'click' y agarra la fila en la que se hizo click y la agrega al localStorage (si no existe)
  let removePeople = (event) => {
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
  $('#tableBody').on('click', 'tr td .btn-success', removePeople)














}

export default localStorageController