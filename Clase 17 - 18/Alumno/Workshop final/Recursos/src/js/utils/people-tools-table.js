class People {

  constructor(id, name, gender, height, mass, skin_color) {
    // let person = new Person(name,gender,height, mass, skin_color)

    this.name = name
    this.gender = gender
    this.height = height
    this.mass = mass
    this.skin_color = skin_color

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
let calculateGender = (gender = 'Desconocido') => {
  if (gender === 'female') return 'Mujer'
  else if (gender === 'male') return 'Hombre'
  else return 'Desconocido'
}

//Recibe string con colores separados por coma en ingles y retorna su significado en español
let calculateColor = (colors = 'Desconocido') => {

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
//Translate es boolean: si es falso -> no se traduce nada y se pone el boton eliminar
//Translate es boolean: si es true -> Se traduce todo lo que se indica y se pone boton agregar
let createBichoNode = (people, id, translate) => {

  let d = document
  //Create element 'li'
  let trNode = d.createElement('tr')

  $(trNode).attr('id', id)
  $(trNode).attr('style', 'overflow: hidden')


  if (translate) {
    people.gender = calculateGender(people.gender)
    people.height = translateMassHeight(people.height, 'height')
    people.mass = translateMassHeight(people.mass, 'mass')
    people.skin_color = calculateColor(people.skin_color)
  }

  let valores = [
    id,
    people.name,
    people.gender,
    people.height,
    people.mass,
    people.skin_color,
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

      if (translate) {
        $(addBtn).addClass('btn btn-success')
        $(addBtn).text('Agregar')
      } else {
        $(addBtn).addClass('btn btn-danger')
        $(addBtn).text('Eliminar')
      }

      addBtn.setAttribute('type', 'button')

      tdElement.appendChild(addBtn)
    }

    trNode.appendChild(tdElement)
  });

  return trNode
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
    gender = document.getElementById(id).children[2].textContent,
    height = document.getElementById(id).children[3].textContent,
    mass = document.getElementById(id).children[4].textContent,
    skin_color = document.getElementById(id).children[5].textContent

  let people = new People(id, name, gender, height, mass, skin_color)

  return people
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


export {
  calculateGender,
  calculateColor,
  translateMassHeight,
  createBichoNode,
  removeElementWithAnimation,
  getRowValues,
  peopleExist
}