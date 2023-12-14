var INPUT = document.getElementById('guess-input')
var BOTON = document.getElementById("guess-button")
const GRID = document.getElementById("grid");





BOTON.addEventListener('click', intentar)
var palabra = "PANEL";
var intentos = 6;

function intentar() {
  const INTENTO = leerIntento();
  console.log(INTENTO);
  if (INTENTO === palabra) {
    terminar("¡GANASTE!")
    return
  }
  const GRID = document.getElementById("grid");
  const ROW = document.createElement('div');
  ROW.className = 'row';
  for (let i in palabra) {
    const SPAN = document.createElement('span');
    SPAN.className = 'letter';
    if (INTENTO[i] === palabra[i]) { //VERDE
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = 'green';
    } else if (palabra.includes(INTENTO[i])) { //AMARILLO
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = 'yellow';
    } else {      //GRIS
      SPAN.innerHTML = INTENTO[i];
      SPAN.style.backgroundColor = 'grey';
    }
    ROW.appendChild(SPAN)
  }
  GRID.appendChild(ROW)
  intentos--
  if (intentos == 0) {
    terminar("PERDISTE :(")
  }
}


function leerIntento() {
  return INPUT.value.toUpperCase();
}

function terminar(mensaje) {
  const INPUT = document.getElementById("guess-input");
  INPUT.disabled = true;
  BOTON.disabled = true;
  let contenedor = document.getElementById('guesses');
  contenedor.innerHTML = mensaje;
}