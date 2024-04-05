document.addEventListener("DOMContentLoaded", function() {
    // Obtener el elemento div por su clase
    var elementoClickeable = document.querySelector(".auto-group-dt9k-oee");

    // Agregar un evento de clic al elemento div
    elementoClickeable.addEventListener("click", function() {
        // Redirigir al usuario a la segunda página
        window.location.href = "nubes.html";
        app.post('/guardar_usuario', (req, res) => {
            const { nombre, email, contraseña } = req.body;
        
            // Insertar los datos del usuario en la base de datos
            const sql = 'INSERT INTO usuarios (nombre, email, contraseña) VALUES (?, ?, ?)';
            connection.query(sql, [nombre, email, contraseña], (err, result) => {
                if (err) {
                    console.error('Error al insertar usuario en la base de datos: ' + err.stack);
                    return res.status(500).send('Error interno del servidor');
                }
                console.log('Usuario insertado correctamente');
                res.redirect('/inscripcion_exitosa.html'); // Redirigir a la página de inscripción exitosa
    });
});
