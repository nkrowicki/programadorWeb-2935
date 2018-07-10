// # 13 Más eventos y métodos de jQuery [Modulo C]

// - 13.1 Más eventos de jQuery
//    - `$(document).ready()`

// $(document).ready(function () {
//   console.log('App init')
//   $('#h1').html('Hola')
// })

//    - `.on()`

// $(document).ready(function () {
//   console.log('App init')

//   var emailInputNode = $('#email')

//   emailInputNode.on('input', function (event) {
//     var inputNode = $(this)

//     var value = inputNode.val()

//     inputNode.val(value.toUpperCase())

//     console.log('Hizo input', inputNode.val())
//   })
// })

//    - `.one()`

// $(document).ready(function () {
//   console.log('App init')

//   var emailInputNode = $('#email')

//   emailInputNode.one('blur', validateEmailField)

//   function validateEmailField (event) {
//     var inputNode = $(this)

//     var value = inputNode.val()

//     inputNode.next().remove()

//     var errorText = ''

//     if (!value) {
//       errorText = 'El campo está vacío'
//     } else {
//       if (value.indexOf('@') === -1) {
//         errorText = 'Falta el arroba (@) '
//       }
//       if (value.indexOf('.') === -1) {
//         errorText = errorText + 'Falta el punto (.)'
//       }
//     }

//     if (errorText) {
//       var parentNode = inputNode.parent()
//       parentNode.append('<div class="invalid-feedback">' + errorText + '</div>')

//       inputNode.removeClass('is-valid')
//       inputNode.addClass('is-invalid')
//     } else {
//       inputNode.removeClass('is-invalid')
//       inputNode.addClass('is-valid')
//     }

//     if (event.type === 'blur') {
//       inputNode.on('input', validateEmailField)
//     }
//   }
// })

//    - `.keydown()`
//       - Enter: 13
//       - Up: 38
//       - Down: 40
//       - Right: 39
//       - Left: 37
//       - Esc: 27
//       - SpaceBar: 32
//       - Ctrl: 17
//       - Alt: 18
//       - Shift: 16

// $(document).ready(function () {
//   console.log('Init app')

//   var emailInputNode = $('#email')

//   emailInputNode.keydown(showKeyPressed)

//   function showKeyPressed (event) {
//     var keyCode = event.which

//     console.log(keyCode)
//   }
// })

// - 13.2 Más métodos de jQuery
//    - `.append()`
//    - `.next()`
//    - `.remove()`
//    - `.parent()`
//    - `.css()`
