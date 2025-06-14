$(document).ready(function () {
  // las modificaciones e animaciones generales del sitio estaran aca
  if (localStorage.getItem("modo") === "oscuro") {
    $("main, body, html").addClass("modo-oscuro");
    $(".iconoLuna").addClass("d-none");
    $(".iconoSol").removeClass("d-none");
  }

  $(".cambioModo").click(function () {
    $("main, body, html").toggleClass("modo-oscuro");

    const modoOscuroActivo = $("main").hasClass("modo-oscuro");

    // Intercambio de íconos
    $(".iconoLuna").toggleClass("d-none", modoOscuroActivo);
    $(".iconoSol").toggleClass("d-none", !modoOscuroActivo);

    // Guardar en localStorage
    localStorage.setItem("modo", modoOscuroActivo ? "oscuro" : "claro");
  });
});