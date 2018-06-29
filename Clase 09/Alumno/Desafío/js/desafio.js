//Funcion que devuelve true si el correo es correcto o caso contrario false
function validateEmail(email) {
  var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  return re.test(email);
}

//Funcion que según si es válido o no el mail agrega o remueve clases
var validateMail = e => {

  let mail = e.target.value

  if (validateEmail(mail)) {
    e.target.classList.remove('is-invalid')
    e.target.classList.add('is-valid')

  } else {
    e.target.classList.remove('is-valid')
    e.target.classList.add('is-invalid')
  }
}

//Identificamos el elemento en donde el usuario ingresará el mail
mail = document.getElementById('email')
//Vaciamos el input
mail.value = ''
//Agregamos una función al evento onblur
mail.onblur = validateMail