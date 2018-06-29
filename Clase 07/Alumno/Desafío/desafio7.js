//Desafio 7 + Ejercicio
//Con manejo de errores (try)!

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

var getLocalList = (name) => {

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

//Ejercicio
var studentsList = ['CARLOS', 'GERONIMO', 'NICOLAS', 'LUCAS', 'MARIA', 'FEDERICO', 'ANTONIO', 'LORNA', 'JULIAN', 'DIEGO', 'DANIELA', 'JUAN', 'MATEO', 'BARBARA', 'AGUSTIN', 'MARIO', 'MARIEL', 'ANA', 'FLORENCIA']
saveLocalList('studentsList', studentsList)

//Desafio
var students = getLocalList('studentsList') // Debe devolver siempre un Array [] vacío o con elementos [...]
console.log(students)