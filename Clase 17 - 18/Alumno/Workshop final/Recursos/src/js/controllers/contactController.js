let contactController = () => {

  //Recibe una palabra y solo devuelve true si es una palabra (letras)
  let isWord = (word) => {
    if (/^[a-zA-Z]+$/.test(word)) return true
    else return false
  }

  //Funcion que devuelve true si el correo es correcto o caso contrario false
  function validateEmail(email) {
    var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    return re.test(email);
  }

  //Activa o desactiva el boton recibido por parametro según las clases que tiene que tener los campos correspondientes
  let activeBtn = (button) => {
    let btn = document.getElementById(button),
      flag = false

    flag = document.getElementById('firstName').classList.contains('is-valid')
    if (flag) flag = document.getElementById('email').classList.contains('is-valid')
    if (flag) flag = document.getElementById('comments').classList.contains('is-valid')

    if (flag) {
      btn.disabled = false
    } else {
      btn.disabled = true
    }
  }


  //Funcion que valida el campo
  //incorrecto->Agrega clase is-invalid al input en cuesion
  //correcto- > Agrega clase is-valid al input en cuesion
  let validateField = (e) => {

    let element = e.target,
      dataInput = element.value,
      flag = false

    if (dataInput !== null && dataInput !== '') {

      switch (element.id) {

        case 'firstName':
        case 'searchText':
          //Check firstName

          if (isWord(dataInput)) {
            flag = true
          }
          break;

        case 'email':
          if (validateEmail(dataInput)) {
            flag = true
          }
          break;

        case 'comments':
          if (e.target.value.length > 0) flag = true

          break;

        default:
          break;
      }

    } //if

    //Usamos el flag para agregar/sacar clase al elemento input
    if (flag) {
      element.classList.remove('is-invalid')
      element.classList.add('is-valid')
    } else {
      element.classList.remove('is-valid')
      element.classList.add('is-invalid')
    }

    activeBtn('submitButton')

    /*
        switch (element.id) {

          case 'dni':
          case 'firstName':
          case 'email':

            activeBtn('addStudentButton')

            break;
          case 'searchText':
            activeBtn('searchStudentButton')
            break;

          case 'deleteDni':

            activeBtn('deleteStudentButton')

            break;


          default:
            break;
        }
    */
  }





















  document.getElementById('firstName').onkeyup = validateField;
  document.getElementById('email').onkeyup = validateField;
  document.getElementById('comments').onkeyup = validateField;







}

export default contactController