$(function () {

  // Oculta el elemento recibido por parametro
  var removeElementWithAnimation = function (id) {
    $(`#${id}`).hide(3000)
  }

  $('#tableBody tr td .btn-danger').click(function () {
    //Variable en la cual almaceno el 'id' de la fila en cuestión
    let id = $(this).parents('tr').attr('id');

    removeElementWithAnimation(id)

  })

});