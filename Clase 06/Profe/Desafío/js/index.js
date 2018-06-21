// Declaro la función

function includesText (text, baseText) {
  // Valido que ambos parámetros sean string
  if (typeof text === 'string' && typeof baseText === 'string') {
    // Verifico si el primer parámetro se encuentra dentro del segundo
    var textUpperCase = text.toUpperCase()
    var baseTextUpperCase = baseText.toUpperCase()
    if (baseTextUpperCase.indexOf(textUpperCase) !== -1) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

// Pruebo mi función

console.log(includesText('Pa', 'Patricia')) // Deberá devolver true

console.log(includesText('pa', 'Patricia')) // Deberá devolver true

console.log(includesText('Patricia', 'Pa')) // Deberá devolver false

console.log(includesText(2, 'Pa')) // Deberá devolver false
