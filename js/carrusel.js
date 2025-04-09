let indice = 0;
const imagenes = document.querySelectorAll('.carrusel img');

function mostrarImagen(i) {
  imagenes[indice].classList.remove('active');
  indice = (i + imagenes.length) % imagenes.length;
  imagenes[indice].classList.add('active');
}

function mover(direccion) {
  mostrarImagen(indice + direccion);
}

// Automático cada 5 segundos
setInterval(() => mover(1), 7000);
