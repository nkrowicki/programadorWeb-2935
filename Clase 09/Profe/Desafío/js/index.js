// Busco el nodo del input de email
var emailInput = document.getElementById('email')

// Asigno una función al evento blur
emailInput.onblur = validateEmailField

/**
 * Defino la función que valida el email
 * @param { Event } event 
 */
function validateEmailField (event) {
  var inputNode = event.target

  // Si el campo no tiene valor, arroba o punto le saco la clase is-valid (si la tiene)
  // y le agrego la is-invalid
  if (
    !inputNode.value ||
    inputNode.value.indexOf('@') === -1 ||
    inputNode.value.indexOf('.') === -1
  ) {
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  } else {
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }
}
