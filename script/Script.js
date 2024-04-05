document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos una referencia al elemento div con la clase "group-1-7mG"
    var elemento = document.querySelector(".group-1-7mG");

    // Agregamos un listener para el evento 'click'
    elemento.addEventListener("click", function() {
        // Redireccionamos a la página de bienvenida
        window.location.href = "bienvenida.html";
    });
});

