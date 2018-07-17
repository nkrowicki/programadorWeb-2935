$(document).ready(function () {
  $('button').on('click', removeElementWithAnimation)
  function removeElementWithAnimation (event) {
    $(this).parent().parent().hide(2000, function () {
      $(this).remove()
    })
  }
})
