console.log('holis funciona')

var cars = [
  {
    model: 'Suran',
    brand: 'volkswagen',
    year: 2015
  },
  {
    model: `Audi TT`,
    brand: 'Audi',
    year: 2017
  },
  {
    model: `Gran turismo`,
    brand: 'Maserati',
    year: 2018
  }
]

function Car (model, brand, year) {
  var id = Math.random()

  this.model = model
  this.brand = brand
  this.year = year

  this.getCarName = function () {
    var carName = 'MODELO ' + model + '  MARCA ' + brand + '  AÑO ' + year
    return carName
  }
}

// var car1 = new Car(cars[0].model, cars[0].brand, cars[0].year)
// var car2 = new Car(cars[1].model, cars[1].brand, cars[1].year)
// var car3 = new Car(cars[2].model, cars[2].brand, cars[2].year)

// console.log(car1.getCarName())
// console.log(car2.getCarName())
// console.log(car3.getCarName())

var car

var newCars = []

for (i = 0; i < cars.length; i++) {
  var car = new Car(cars[i].model, cars[i].brand, cars[i].year)

  newCars.push(car)
}

console.log(cars)
console.log(newCars)
