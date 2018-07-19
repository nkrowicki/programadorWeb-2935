function getData (url, cbk) {
  $.ajax(url)
    .done(function (data) {
      cbk(null, data)
    })
    .fail(function (error) {
      cbk(error)
    })
}

getData('https://swapi.co/api/people/5', showData)

function showData (error, data) {
  if (data) {
    console.log(data)
  }
}
