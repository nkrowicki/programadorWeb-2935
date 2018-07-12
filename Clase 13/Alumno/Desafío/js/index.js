$(function () {
  //Retorna true si es valido el mail
  function validateEmail(email) {
    var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    return re.test(email);
  }

  //Recibe una palabra y solo devuelve true si es una palabra (letras)
  let isWord = (word) => {
    if (/^[a-zA-Z]+$/.test(word)) return true
    else return false
  }


  var checkBtn = function () {

    let flag = false

    //Chequear si todos los inputs tienen longitud mayor a 0 (sumamos la longitud de cada uno)
    if ($('#firstName').val().length > 0) {
      flag = true
    }

    if (flag) {
      if ($('#comments').val().length > 0) {
        flag = true
      } else flag = false
    }

    if (flag) {
      if ($('#comments').val().length > 0) {
        flag = true
      } else flag = false
    }


    console.log("valor flag: " + flag)

    //Si no existe algun error en el sitio (chequemaos por clase y por largo de los inputs)
    if ($('.alert-danger').length === 0 && flag) {
      //Habilitar boton
      $('#submitButton').prop('disabled', false);
    } else {
      $('#submitButton').prop('disabled', true);
    }

  }

  var textoError = (element, flag) => {
    //Si flag es falso meto el cartel de error

    errorText = '<p class="alert alert-danger ">Por favor introzuca un nombre v&aacute;lido</p>'

    if (!flag) {

      if (!$(element).next().is('p')) {
        $(element).after(errorText);

      }
    } else {
      if ($(element).next().is('p')) $(element).next().remove()
    }


    checkBtn()


  }



  var checkEmail = function (e) {

    let element = e.target,
      dataInput = element.value,
      flag = false


    if (validateEmail(dataInput)) {
      flag = true
    }

    textoError(element, flag)

  }

  var checkName = function (e) {


    let element = e.target,
      dataInput = element.value,
      flag = false

    if (isWord(dataInput)) {
      flag = true
    }


    textoError(element, flag)

  }

  $('input,textarea').val('');




  var inputFirstName = $('#firstName')
  var inputMail = $('#email')
  var inputComments = $('#comments')
  $('#submitButton').prop('disabled', true);


  inputMail.keyup(checkEmail)
  inputMail.focus(checkEmail)

  inputFirstName.keyup(checkName)
  inputFirstName.focus(checkName)

  inputComments.keyup(checkName)
  inputComments.focus(checkName)



});