document.addEventListener("DOMContentLoaded", function() {
    // Obtener el elemento div por su ID
    var divRedireccionar = document.getElementById("redireccionar-login");

    // Agregar un evento de clic al elemento div
    divRedireccionar.addEventListener("click", function() {
        // Redirigir al usuario a la página de inicio de sesión
        window.location.href = "loggin.html";
    });
});

