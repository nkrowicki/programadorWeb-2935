// Objetos

// ¿Qué es un objeto?

// Forma Old Fashion

// var obj = {
//   title: 'Shrek',
//   director: 'Andrew Adamson',
//   year: 2001
// }

// console.log(obj.title)
// console.log(obj['title'])

// var obj1 = {
//   title: 'Shrek',
//   director: 'Andrew Adamson',
//   year: 2001
// }

// var obj2 = {
//   title: 'Shrek',
//   director: 'Andrew Adamson',
//   year: 2001
// }

// var obj3 = obj1

// console.log(obj1.title)
// console.log(obj3.title)

// obj1.title = 'Coco'

// console.log('Cambie el nombre del obj1 a Coco')

// console.log(obj1.title)
// console.log(obj3.title)

// obj3.title = 'La última nieve de primavera'
// obj3.actor = 'Pocho la pantera'

// console.log('Cambie el nombre del obj1 a La última nieve de primavera')

// console.log(obj1.actor)
// console.log(obj3.actor)

// console.log(obj1 === obj3)

// Función constructora y `new`

// function Movie (title, director, year) {
//   var id = Math.random()

//   this.title = title
//   this.director = director
// }

// var shrek = new Movie('Shrek', 'Andrew Adamson', 2001)

// console.log(shrek.title)
// console.log(shrek.director)
// console.log(shrek.year)

// var showMessage = function (name) {
//   console.log('Hola ' + name)
// }

// showMessage('Pedro')

// function Movie (title, director, year) {
//   var id = Math.random()

//   var modified = false

//   this.title = title
//   this.director = director

//   this.getYear = function () {
//     return year
//   }

//   this.getId = function () {
//     return id
//   }

//   this.setYear = function (newYear) {
//     if (typeof newYear === 'number') {
//       year = newYear
//       modified = true
//     }
//   }
// }

// var shrek = new Movie('Shrek', 'Andrew Adamson', 2001)

// var matrix = new Movie('Matrix', 'Hermanas Wachowsky', 1999)

// console.log(shrek.title)
// console.log(shrek.getId())

// console.log(matrix.title)
// console.log(matrix.getId())

// console.log(shrek === matrix)

// var movies = [
//   {
//     title: 'Shrek',
//     director: 'Andrew Adamson',
//     year: 2001
//   },
//   {
//     title: 'Matrix',
//     director: 'Hermanas Wachowsky',
//     year: 1999
//   }
// ]

// var newMovies = []

// var movie
// var newMovie

// for (var i = 0; i < movies.length; i++) {
//   movie = movies[i]
//   newMovie = new Movie(movie.title, movie.director, movie.year)
//   newMovies.push(newMovie)
// }

// console.log(newMovies[0].getId())

// console.log(shrek.year)

// shrek.year = 2018

// console.log(shrek.year)
// console.log(shrek.getYear())

// shrek.setYear(2018)

// console.log(shrek.getYear())

// shrek.setYear('Pato')

// console.log(shrek.getYear())

// console.log(shrek.title)

// shrek.title = 'Matrix'

// console.log(shrek.title)

// console.log(shrek.director)
// console.log(shrek.year)
// console.log(shrek.getYear())
// console.log(shrek.getId())

// Propiedades de los objetos
// Métodos de los objetos
// Uso del `this` para publico y privado
