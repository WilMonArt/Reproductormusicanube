document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos una referencia al elemento específico en la página uno
    var elemento = document.querySelector(".hombre-moderno-auriculares-entorno-urbano-4-2R4");

    // Agregamos un listener para el evento 'click'
    elemento.addEventListener("click", function() {
        // Redireccionamos a la página dos
        window.location.href = "perfil.html";
    });
});
