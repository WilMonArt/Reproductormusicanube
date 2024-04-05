
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Main {

    public static void main(String[] args) {
        // Datos de conexión
        String url = "jdbc:mysql://localhost:3306/ReproductorMusica";
        String usuario = "root";
        String contraseña = "1102348761";

        // Intentar establecer la conexión
        try {
            Connection conexion = DriverManager.getConnection(url, usuario, contraseña);
            System.out.println("¡Conexión exitosa!");

            // Aquí puedes ejecutar consultas SQL y trabajar con la base de datos
            // No olvides cerrar la conexión cuando hayas terminado
            conexion.close();
        } catch (SQLException e) {
            System.err.println("Error al conectar a la base de datos: " + e.getMessage());
        }
    }
}
