// la estructura JS de la pagina contacto estara aqui

(function () {
  'use strict';
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); 
    
    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add('was-validated');
      return; 
    }
    
    form.classList.add('was-validated');

    const nombre = document.getElementById('inputName').value.trim();

    const mensaje = `${nombre}, en breve te estaré respondiendo.`;

    mostrarMensaje(mensaje);

    form.reset();
    form.classList.remove('was-validated');
  });

 // funciones para cuando tocamos el boton de enviar
  function mostrarMensaje(texto) {
    // Crear overlay si no existe
    let overlay = document.getElementById('mensajeOverlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'mensajeOverlay';
      document.body.appendChild(overlay);
    }
    
    overlay.innerHTML = `<div class="mensajeModal"><p>${texto}</p><button id="cerrarMensaje">Cerrar</button></div>`;

    overlay.classList.add('visible');

    document.getElementById('cerrarMensaje').onclick = function () {
      overlay.classList.remove('visible');
    }
  }
})();
