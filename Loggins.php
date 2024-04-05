<?php
// Configuración de la conexión a la base de datos MySQL
$servername = "localhost"; 
$username = "root"; 
$password = "1102348761"; 
$database = "ReproductorMusicaNube"; 

// Conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $database);


// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}


// Procesar el formulario cuando se envíe
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $contraseña = $_POST["contraseña"];

    // Insertar los datos del usuario en la base de datos
    $sql = "INSERT INTO usuarios (nombre, email, contraseña) VALUES ('$nombre', '$email', '$contraseña')";

    if ($conn->query($sql) === TRUE) {
        echo "Registro exitoso";
    } else {
        echo "Error al registrar usuario: " . $conn->error;
    }
}

// Cerrar la conexión
$conn->close();
?>