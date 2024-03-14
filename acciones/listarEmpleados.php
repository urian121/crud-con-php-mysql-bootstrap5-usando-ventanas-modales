<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    include("../config/config.php");

    $sql = "SELECT * FROM tbl_empleados ORDER BY id ASC";
    $resultado = $conexion->query($sql);
    if (!$resultado) {
        // Manejar el error aquí si la consulta no se ejecuta correctamente
        echo "Error al obtener los empleados: " . $conexion->error;
        exit(); // O cualquier otra acción que desees realizar
    }

    // Crear un array para almacenar los datos de los empleados
    $empleados = array();
    while ($fila = $resultado->fetch_assoc()) {
        $empleados[] = $fila;
    }

    // Devolver los empleados en formato JSON
    header('Content-Type: application/json');
    echo json_encode($empleados);
}
