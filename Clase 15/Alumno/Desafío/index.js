let showNames = (results) => {
  let names
  for (let i = 0; i < results.length; i++) {
    names = results[i]

    console.log(names.name)
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

let urlBase = 'https://swapi.co/api/' + 'people/'

getData(urlBase, getInfo)










//Devuelve todo las personas
// https: //swapi.co/api/people/