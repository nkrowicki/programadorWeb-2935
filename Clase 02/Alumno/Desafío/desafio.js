function esDiaHabil(dia) {
  switch (dia) {
    case 'Lunes':
    case 'Martes':
    case 'Miércoles':
    case 'Miercoles':
    case 'Jueves':
    case 'Viernes':
      return (dia + ' es un dia habil')
      break;
    case 'Sábado':
    case 'Sabado':
    case 'Domingo':
      return (dia + ' es un dia no habil')
      break;
    case 'Pato':
      console.log('---------> ' + dia + '?????!!!  Basta de patos!! <-----------------')
    default:
      return (dia + ' No es ningun dia de la semana')
  }
}

var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
]


//Forma 1
console.log("------ Forma 1 ------")
for (i = 0; i < daysOfTheWeek.length; i++) {
  console.log(esDiaHabil(daysOfTheWeek[i]))
}

//Forma 2
console.log("\n------ Forma 2 ------")
daysOfTheWeek.forEach(function (dia) {
  console.log(esDiaHabil(dia))

})