var res = 0
var esfalso = false

function sumar(nro1, nro2) {
  return (nro1 + nro2)
}

function restar(nro1, nro2) {
  return (nro1 - nro2)
}

function dividir(nro1, nro2) {
  return (nro1 / nro2)
}

function multiplicar(nro1, nro2) {
  return (nro1 * nro2)
}


function noNum() {
  alert("No has ingresado un numero, intente de nuevo")
}

do {
  var opc = prompt("Desea 1-sumar, 2-restar, 3-dividir o 4-multiplicar?")
  if (isNaN(opc)) {
    noNum()
  } else if (opc < 1 || opc > 4) {
    alert("Por favor ingrese un valor comprendido entre 1 y 4")
  } else {
    break
  }
} while (true);

do {
  esfalso = true
  var nro1 = prompt("Ingrese numero 1: ")
  if (isNaN(nro1) || nro1 == "") {
    noNum()
    esfalso = false
  } else if (opc == 3 && nro1 == 0) {
    alert("No puede ser 0, ingrese nuevamente")
    esfalso = false;
  }

} while (!esfalso);


do {
  esfalso = true
  var nro2 = prompt("Ingrese numero 2: ")
  if (isNaN(nro2) || nro2 == "") {
    noNum()
    esfalso = false
  } else if (opc == 3 && nro2 == 0) {
    alert("No puede ser 0, ingrese nuevamente")
    esfalso = false;
  }
} while (!esfalso);

// alert("opc: " + opc + " nro1: " + nro1 + " nro2: " + nro2)

opc = parseInt(opc);
nro1 = parseInt(nro1);
nro2 = parseInt(nro2);


switch (opc) {
  case 1:
    alert(sumar(nro1, nro2))
    break;
  case 2:
    alert(restar(nro1, nro2))
    break;
  case 3:
    alert(dividir(nro1, nro2))
    break;
  case 4:
    alert(multiplicar(nro1, nro2))
    break;

  default:
    break;
}