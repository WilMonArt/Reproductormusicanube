<%@ page import="java.sql.*" %>

<%
    // Parámetros de conexión a la base de datos MySQL
    String url = "jdbc:mysql://localhost:3306/ReproductorMusicaNube";
    String user = "root";
    String password = "1102348761";

    // Parámetros enviados desde el formulario
    String nombre = request.getParameter("nombre");
    String email = request.getParameter("email");
    String contraseña = request.getParameter("contraseña");

    // Intentar establecer conexión y guardar datos en la base de datos
    try {
        Class.forName("com.mysql.jdbc.Driver");
        Connection con = DriverManager.getConnection(url, user, password);
        Statement stmt = con.createStatement();
        String sql = "INSERT INTO usuarios (nombre, email, contraseña) VALUES ('" + nombre + "', '" + email + "', '" + contraseña + "')";
        int result = stmt.executeUpdate(sql);
        if (result > 0) {
            out.println("Registro exitoso");
        } else {
            out.println("Error al registrar usuario");
        }
        con.close();
    } catch (Exception e) {
        out.println("Error: " + e.getMessage());
    }
%>