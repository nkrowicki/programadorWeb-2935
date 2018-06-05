var gender = prompt('Ingrese su género, male, female u other')

var age = prompt('Ingrese su edad')

var message = 'Hola, '

switch (gender) {
  case 'male':
    message = message + 'Sr. '
    break
  case 'female':
    message = message + 'Sra. '
    break
  case 'other':
    message = message + 'Sx. '
    break
  default:
    message = message + 'Género inválido '
    break
}

if (age < 18) {
  message = message + 'usted es menor de edad no puede ingresar'
} else if (age >= 18) {
  message = message + 'usted es mayor de edad puede ingresar'
}

console.log(message)
