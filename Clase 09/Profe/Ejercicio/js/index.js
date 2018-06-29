// Busco el nodo del input de nombre
var firstNameInput = document.getElementById('firstName')

// Asigno una función al evento blur
firstNameInput.onblur = validateRequiredField

/**
 * Defino la función que valida el campo para que no esté vacío
 * @param { Event } event 
 */
function validateRequiredField (event) {
  var inputNode = event.target

  // Si el campo no tiene valor le saco la clase is-valid (si la tiene)
  // y le agrego la is-invalid
  if (!inputNode.value) {
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  } else {
    // Si el campo tiene valor le saco la clase is-invalid y le agrego la is-valid
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }
}
