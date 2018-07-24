import {
  getLocalList,
  setLocalList
} from '../utils/localStorage'

import {
  calculateGender,
  calculateColor,
  translateMassHeight,
  createBichoNode,
  removeElementWithAnimation,
  getRowValues,
  peopleExist
} from '../utils/people-tools-table'


let localStorageController = () => {


  //Recibe el evento que desató 'click' y agarra la fila en la que se hizo click y la agrega al localStorage (si no existe)
  let removePeople = (event) => {
    let id = $(event.target).parents('tr').attr('id')

    //Variable en la cual almaceno el 'id' de la fila en cuestión
    let nameList = 'peopleList',
      flagIndex = -1

    removeElementWithAnimation(id)

    //Obtenemos lo que hay en el localList
    let peopleList = getLocalList(nameList) // Debe devolver siempre un Array [] vacío o con elementos [...]
    //Recorremos lo obtenido
    peopleList.forEach((people, i) => {

      if (parseInt(id, 10) == parseInt(people.id, 10)) {
        //Si entra acá es porque coincidió...Así que hay que eliminar esta persona (guardamos su posicion)
        flagIndex = i
      }
    })

    //filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
    const newList = peopleList.filter((peopleList, index) => index != flagIndex);
    //Guardamos la nueva lista (Sobreescribiendo la que ya teniamos)
    setLocalList(nameList, newList)

  }


  let showNames = (results, filter) => {
    let people, nameList = 'peopleList'
    let mainList = $('#tableBody')

    //childrensCount usada para saber cuantos hijos tiene la lista (Equivaldría al ID del personaje..)
    let childrensCount = mainList.children().length

    for (let i = 0; i < results.length; i++) {
      people = results[i]
      // console.log(people)

      //Llamamos a la funcion enviando datos del nodo que tiene que crear y el nro que le tiene que poner
      let peopleNode = createBichoNode(people, people.id, false)

      //Si el personaje existe en localstorage -> lo ocultamos
      if (filter) {
        if (peopleExist(childrensCount, nameList)) peopleNode.hidden = 'true'
      }

      // Add child to DOM-> ul (mainList)
      mainList.append(peopleNode)

    }
  }


  let data = getLocalList('peopleList')
  showNames(getLocalList('peopleList'), false)


  //Está de esta manera el evento click por que son botones que se crearán despues de que se corran las siguientes lineas
  //The .on() method allows you to delegate any desired event handler to:
  //current elements or future elements added to the DOM at a later time.
  $('#tableBody').on('click', 'tr td .btn-danger', removePeople)

}

export default localStorageController