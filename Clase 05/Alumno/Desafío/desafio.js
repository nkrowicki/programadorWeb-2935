// Datos
var students = [{
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987,
    email: 'juan@gmail.com'
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989,
    email: 'ana@gmail.com'
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956,
    email: 'pedro@gmail.com'
  }
]

//Creacion de clase Student la cual luego va a ser instanciada para crear los objetos
class Student {

  constructor(firstName, lastName, dni, email) {
    this.firstName = firstName
    this.lastName = lastName
    this.dni = dni
    this.email = email

    this._id = dni
  }

  getId() {
    return this._id
  }

  getFullName() {
    if (this.lastName !== undefined) return (this.firstName + ' ' + this.lastName)
  }
}

//Creación de Array el cual va a contener los alumnos
var alumn = []

//Creamos los objetos con los datos obtenidos del array "students" y los almacenamos en el nuevo array "alumn"
students.forEach((element, i) => {
  alumn[i] = new Student(element.firstName, element.lastName, element.dni, element.email)
});

//Mostramos en consola el funcionamiento de cada metodo
alumn.forEach((element, i) => {
  console.log("Alumno " + i)
  console.log("Mail: " + element.email)
  console.log("Metodo getId: " + element.getId())
  console.log("Metodo getFullName: " + element.getFullName())
  console.log("----------------------------")
});