document.addEventListener("DOMContentLoaded", function() {
    // Agregar evento de clic al documento
    document.addEventListener("click", function() {
        // Redirigir al usuario a la segunda página
        window.location.href = "carpetas.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Obtener la imagen que se clickeará para redirigir
    var image = document.querySelector('.vector-5-cEA');

    // Agregar evento de clic a la imagen
    image.addEventListener("click", function() {
        // Redirigir al usuario a la segunda página
        window.location.href = "nubes.html";
    });
});
