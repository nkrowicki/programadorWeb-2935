// $(document).ready(function () {
//   console.log('Init app')

//   function getData (url, cbk) {
//     var jqxhr = $.ajax(url)
//       .done(function (data) {
//         cbk(null, data)
//       })
//       .fail(function (error) {
//         cbk(error)
//       })
//   }

//   var urlBase = 'https://swapi.co/api/' + 'starships/'

//   getData(urlBase, getInfo)

//   function getInfo (error, data) {
//     if (!error) {
//       showStarhipsNames(data.results)
//       if (data.next) {
//         getData(data.next, getInfo)
//       }
//     } else {
//       console.log('Error', error)
//     }
//   }

//   function showStarhipsNames (results) {
//     var starship
//     for (var i = 0; i < results.length; i++) {
//       starship = results[i]

//       console.log(starship.name + ' ' + starship.model)
//     }
//   }
// })

// $(document).ready(function () {
//   console.log('Init app')

//   function getData (url, cbk) {
//     var jqxhr = $.ajax(url)
//       .done(function (data) {
//         cbk(null, data)
//       })
//       .fail(function (error) {
//         cbk(error)
//       })
//   }

//   var urlBase = 'https://swapi.co/api/' + 'starships/'

//   getData(urlBase, getInfo)

//   function getInfo (error, data) {
//     if (!error) {
//       showStarhipsNames(data.results)
//       console.log('-----------')
//       if (data.next) {
//         $('#show-more').one('click', function () {
//           getData(data.next, getInfo)
//         })
//       } else {
//         $('#show-more').remove()
//       }
//     } else {
//       console.log('Error', error)
//     }
//   }

//   function showStarhipsNames (results) {
//     var starship
//     for (var i = 0; i < results.length; i++) {
//       starship = results[i]

//       console.log(starship.name)
//     }
//   }
// })

// var pepe = function () {
//   console.log('Hola')
//   function parseInt (pepe) {
//     return 'Pato ' + pepe
//   }

//   console.log('Adentro', parseInt('87', 10))

//   console.log('Adentro', window.parseInt('87', 10))
// }
// pepe()

// console.log('Afuera', parseInt('87', 10))

// console.log('Afuera', window.parseInt('87', 10))
// import showNamePepe from './pepe'

// var showNamePepe = (function () {
//   function showName () {
//     console.log('Soy pepe')
//   }

//   return showName
// })()
