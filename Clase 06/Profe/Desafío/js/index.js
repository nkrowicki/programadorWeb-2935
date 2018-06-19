// Declaro la función

function includesText (text, baseText) {
  // Valido que ambos parámetros sean string
  if (typeof text === 'string' && typeof baseText === 'string') {
    // Verifico si el primer parámetro se encuentra dentro del segundo
    if (baseText.indexOf(text) !== -1) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

// Versión más corta de la misma función

// function includesTextCompresed (text, baseText) {
//   // Valido que ambos parámetros sean string
//   return !!(
//     typeof text === 'string' &&
//     typeof baseText === 'string' &&
//     baseText.indexOf(text) !== -1
//   )
// }

// Pruebo mi función

console.log(includesText('Pa', 'Patricia')) // Deberá devolver true

console.log(includesText('Patricia', 'Pa')) // Deberá devolver false

console.log(includesText(2, 'Pa')) // Deberá devolver false
