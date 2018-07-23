class People {

  constructor(id, name, genre, height, weight, eyeColor) {
    // let person = new Person(name,genre,height, weight, eyeColor)

    this.name = name
    this.genre = genre
    this.height = height
    this.weight = weight
    this.eyeColor = eyeColor

    this.id = id
  }

  getId() {
    return this.id
  }

  // getFullName() {
  //   if (this.lastName !== undefined) return (this.firstName + ' ' + this.lastName)
  // }
}

//Recibe el genero en ingles o n/a y retorna su significado en español
let calculateGender = (gender) => {
  if (gender === 'female') return 'Mujer'
  else if (gender === 'male') return 'Hombre'
  else return 'Desconocido'
}

//Recibe string con colores separados por coma en ingles y retorna su significado en español
let calculateColor = (colors) => {

  let auxColor = ''

  colors = colors.split(', ')


  colors.forEach((color, index) => {
    (index > 0) && (auxColor += ' ')
    switch (color) {
      case 'fair':
        auxColor += 'Limpio'
        break;
      case 'white':
        auxColor += 'Blanco'
        break;
      case 'blue':
        auxColor += 'Azul'
        break;
      case 'light':
        auxColor += 'Luminoso'
        break;
      case 'green':
        auxColor += 'Verde'
        break;
      case 'brown':
        auxColor += 'Marr&oacute;n'
        break;
      case 'grey':
        auxColor += 'Gris'
        break;
      case 'red':
        auxColor += 'Rojo'
        break;
      case 'pale':
        auxColor += 'P&aacute;lido'
        break;
      case 'orange':
        auxColor += 'Naranja'
        break;
      case 'yellow':
        auxColor += 'Amarillo'
        break;
      case 'green':
        auxColor += 'Verde'
        break;
      case 'dark':
        auxColor += 'Negro'
        break;
      case 'light':
        auxColor += 'Luminoso'
        break;
      case 'tan':
        auxColor += 'Bronceado'
        break;
      case 'silver':
        auxColor += 'Plata'
        break;
      case 'none':
        auxColor += 'Ninguno'
        break;

      default:
        auxColor += 'Indefinido'
        break;
    }
  });

  return auxColor
}

let translateMassHeight = (data, type) => {
  if (data !== 'unknown') {
    if (type === 'mass') data += ' kg'
    else data += ' cm'
  } else data = 'Desconocido'
  return data
}

//Devuelve un nodo listo para incrustar
let createBichoNode = (people, id) => {

  let d = document
  //Create element 'li'
  let trNode = d.createElement('tr')

  $(trNode).attr('id', id)
  $(trNode).attr('style', 'overflow: hidden')

  let valores = [
    id,
    people.name,
    calculateGender(people.gender),
    `${translateMassHeight(people.height,'height')}`,
    `${translateMassHeight(people.mass,'mass')}`,
    calculateColor(people.skin_color),
    null
  ]

  let flag = true

  valores.forEach((value, i) => {

    let tdElement = d.createElement('td')

    if (flag) {
      tdElement.innerHTML = id
      flag = false
    } else tdElement.innerHTML = value

    if (i === valores.length - 1) {

      tdElement.style.padding = 0

      let addBtn = d.createElement('button')
      $(addBtn).addClass('btn btn-success')
      $(addBtn).text('Agregar')
      addBtn.setAttribute('type', 'button')

      tdElement.appendChild(addBtn)
    }

    trNode.appendChild(tdElement)
  });

  return trNode
}

//Muestra la lista recibida (array) en la tabla encontrada por su id
let showNames = (results) => {

  let people
  for (let i = 0; i < results.length; i++) {
    people = results[i]

    let mainList = $('#tableBody')
    //childrensCount usada para saber cuantos hijos tiene la lista
    let childrensCount = mainList.children().length
    //Llamamos a la funcion enviando datos del nodo que tiene que crear y el nro que le tiene que poner
    let peopleNode = createBichoNode(people, childrensCount++)

    // Add child to DOM-> ul (mainList)
    mainList.append(peopleNode)

  }

}

// Oculta el elemento recibido por parametro
let removeElementWithAnimation = function (id) {
  $(`#${id}`).hide(3000)
}

//Obtenemos los datos ingresados de la fila recibida (id)
//Devuelve un objeto ya instanciado de la clase People
let getRowValues = (id) => {

  let
    name = document.getElementById(id).children[1].textContent,
    genre = document.getElementById(id).children[2].textContent,
    height = document.getElementById(id).children[3].textContent,
    weight = document.getElementById(id).children[4].textContent,
    eyeColor = document.getElementById(id).children[5].textContent

  let people = new People(id, name, genre, height, weight, eyeColor)

  return people
}


export {
  calculateGender,
  calculateColor,
  translateMassHeight,
  createBichoNode,
  showNames,
  removeElementWithAnimation,
  getRowValues
}