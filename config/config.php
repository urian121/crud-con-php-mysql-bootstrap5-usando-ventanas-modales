<?php
$host = "localhost";
$usuario = "root";
$contrasena = "4825";
$base_de_datos = "bd_empleados";

$conexion = new mysqli($host, $usuario, $contrasena, $base_de_datos);

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}
