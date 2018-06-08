var studentsList = [{
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
]

main()


function main() {

  text = prompt("Ingrese texto a buscar")

  let position = (searchAlumn(text, studentsList))

  if (position !== -1) console.log("El texto " + text + " ha sido encontrado en la posicion: " + position + " de la lista pasada")
  else console.log("\"" + text + "\" No ha sido encontrado en la lista")

  console.log("------------------------")

  showAlumn(position, studentsList)
}


//Devuelve -1 si no encuentra nada o caso contrario devuelve la posicion en la que fue encontrado (buscar por nombre y apellido y no es casesensitive)
function searchAlumn(texto, lista) {
  let flag = -1

  lista.forEach((element, i) => {
    if (element.firstName === texto || element.lastName === texto) {
      flag = i
    }
  });

  return flag
}

//Busca un alumno y muestra su clave:valor
function showAlumn(position, lista) {

  alumn = lista[position]

  for (const key in alumn) {
    if (alumn.hasOwnProperty(key)) {
      const element = alumn[key];
      console.log(key + ":" + element)
    }
  }

}