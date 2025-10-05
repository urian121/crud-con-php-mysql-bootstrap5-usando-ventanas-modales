<!doctype html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CRUD de Empleados en PHP, MySQL utilizando MODALES</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
    <link rel="stylesheet" href="assets/css/home.css">
</head>

<body>
    <?php
    include("config/config.php");
    include("acciones/acciones.php");

    $empleados = obtenerEmpleados($conexion);
    $totalEmpleados = $empleados->num_rows;
    ?>

    <h1 class="text-center mt-5 mb-5 fw-bold">CRUD completo con PHP, MySQL y Bootstrap 5 usando Modales</h1>

    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col-md-12">
                <h1 class="text-center">
                    <span class="float-start">
                        <a href="#" onclick="modalRegistrarEmpleado()" class="btn btn-success" title="Registrar Nuevo Empleado">
                            <i class="bi bi-person-plus"></i>
                        </a>
                    </span>
                    Lista de empleados (<?php echo $totalEmpleados ?>)
                    <span class="float-end">
                        <a href="acciones/exportar.php" class="btn btn-success" title="Exportar a CSV" download="empleados.csv"><i class="bi bi-filetype-csv"></i></a>
                    </span>
                    <hr>
                </h1>
                <?php
                include("empleados.php"); ?>
            </div>
        </div>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="assets/js/detallesEmpleado.js"></script>
    <script src="assets/js/addEmpleado.js"></script>
    <script src="assets/js/editarEmpleado.js"></script>
    <script src="assets/js/eliminarEmpleado.js"></script>
    <script src="assets/js/refreshTableAdd.js"></script>
    <script src="assets/js/refreshTableEdit.js"></script>

    <!-- Libreria para alertas ----->
    <script src="https://unpkg.com/nextjs-toast-notify@latest/dist/nextjs-toast-notify.min.js"></script>

</body>

</html>
