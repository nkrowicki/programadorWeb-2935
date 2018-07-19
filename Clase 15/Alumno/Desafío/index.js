$(function () {

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

        let deleteBtn = d.createElement('button')
        $(deleteBtn).addClass('btn btn-danger')
        $(deleteBtn).text('Eliminar')
        deleteBtn.setAttribute('type', 'button')

        tdElement.appendChild(deleteBtn)
      }

      trNode.appendChild(tdElement)
    });

    return trNode
  }

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
      if (data.next) getData(data.next, getInfo)
      // console.log('Todo ok', data)
    } else {
      console.log('Error: ' + error)
    }
  }

  // Oculta el elemento recibido por parametro
  let removeElementWithAnimation = function (id) {
    $(`#${id}`).hide(3000)
  }

  //Está de esta manera el evento click por que son botones que se crearán despues de que se corran las siguientes lineas
  //The .on() method allows you to delegate any desired event handler to:
  //current elements or future elements added to the DOM at a later time.
  $('#tableBody').on('click', 'tr td .btn-danger', function () {
    //Variable en la cual almaceno el 'id' de la fila en cuestión
    let id = $(this).parents('tr').attr('id');

    removeElementWithAnimation(id)

  })

  //Peticion AJAX
  let urlBase = 'https://swapi.co/api/' + 'people/'
  getData(urlBase, getInfo)

});