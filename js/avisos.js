$(document).ready(function() {
    // las animaciones de la pagina "avisos" estaran aca
  const cardData = {
    "Arquitectura de computadores": {
      title: "Tareas pendientes - arquitectura de computadores",
      description: ["No hay tareas pendientes."]
    },
    "Sistemas de información I": {
      title: "Tareas pendientes - Sistemas de información I",
      description: ["Entrega TPO grupal: 20/6."]
    },
    "Introducción a la algoritmia": {
      title: "Tareas pendientes - Fundamentos de informática",
      description: ["Entrega TPO grupal: 18/6", "Segundo parcial 18/6"]
    },
    "Marketing": {
      title: "Tareas pendientes - Marketing",
      description: ["Segundo parcial: 19/6", "Defensa oral del TPO grupal: 26/6"]
    },
    "Diseño y desarrollo web": {
      title: "Tareas pendientes - Diseño y desarrollo web",
      description: [
        "Ejercicio individual: JavaScript",
        "Práctica Formulario Javascript sitio individual personal obligatorio (realizado para el parcial)",
        "Modo claro y oscuro"
      ]
    }
  };

  $(".card").click(function() {
    const cardTitle = $(this).find(".card-footer h5").text().trim();

    if(cardData[cardTitle]) {
      $("#cardModalLabel").text(cardData[cardTitle].title);
      
      const fullDescription = cardData[cardTitle].description.join('\n- '); 
      $("#cardModal .modal-body").text("- " + fullDescription);
      const myModal = new bootstrap.Modal(document.getElementById('cardModal'));
      myModal.show();
    }
  });
});