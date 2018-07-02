function includesText(text, inText) {

  //Chequeamos que sean strings y que no esten vacios los parametros recibidos
  if (isNaN(text) && isNaN(inText) && text.length != 0 && inText.length != 0 && typeof text === 'string' && typeof inText === 'string') {
    //transformamos ambas variables a mayusculas
    var text = text.toUpperCase()
    var inText = inText.toUpperCase()
  } else return false

  if (text.indexOf(inText) === -1) return true
  else return false

}

console.log(includesText('21', 'Hola')) //Devolvera false

console.log(includesText('Pa', 'Patricia')) // Deverá devolver true

console.log(includesText('Patricia', 'Pa')) // Deverá devolver false

console.log(includesText(2, 'Pa')) // Deverá devolver false