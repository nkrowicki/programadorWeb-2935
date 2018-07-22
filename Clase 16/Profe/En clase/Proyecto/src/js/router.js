import crossroads from 'crossroads'

import homeController from './controllers/homeController'
import contactController from './controllers/contactController'

$(document).ready(function () {
  console.log('Init app')

  crossroads.addRoute('#/contact', function () {
    $('#root').load('./partials/contact.html', contactController)
  })

  crossroads.addRoute('/', function () {
    $('#root').load('./partials/home.html', homeController)
  })

  // En cada cambio del # va a verificar las rutas
  $(window).on('hashchange', function () {
    crossroads.parse(window.location.hash)
  })

  crossroads.parse(window.location.hash)
})
