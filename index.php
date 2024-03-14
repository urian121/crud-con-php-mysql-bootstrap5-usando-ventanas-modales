<!doctype html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Desarrollo de un Sistema CRUD de Empleados en PHP utilizando PDO y MySQL</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
    <link rel="stylesheet" href="assets/css/home.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/2.0.1/css/dataTables.bootstrap5.css">

</head>

<body>
    <?php
    include("config/config.php");
    include("acciones/acciones.php");
    ?>
    <h1 class="text-center mt-5 mb-5 fw-bold">Desarrollo de un Sistema CRUD de Empleados en PHP utilizando PDO y MySQL</h1>

    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col-md-4" style="border-right: 1px solid #dee2e6;">
                <?php
                if (isset($_GET['id'])) {
                    $id = $_GET['id'];
                    $datoEmpleadoEdit = obtenerDatosEmpleado($conexion, $id);
                }
                include("formulario.php"); ?>
            </div>
            <div class="col-md-8">
                <h1 class="text-center">lista de empleados
                    <span class="float-end">
                        <a href="acciones/exportar.php" class="btn btn-success" title="Exportar a CSV" download="empleados.csv"><i class="bi bi-filetype-csv"></i></a>
                    </span>
                    <hr>
                </h1>
                <?php
                $empleados = obtenerEmpleados($conexion);
                $totalEmpleados = $empleados->num_rows;
                echo "Total de empleados: <strong>" . $totalEmpleados . "</strong>";
                include("empleados.php"); ?>
            </div>
        </div>
    </div>




    <script src="https://code.jquery.com/jquery-3.7.1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="assets/js/home.js"></script>

    <!------------------css para la tabla de empleados-------------------------->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.datatables.net/2.0.1/js/dataTables.js"></script>
    <script src="https://cdn.datatables.net/2.0.1/js/dataTables.bootstrap5.js"></script>
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json"></script>
    <script>
        $(document).ready(function() {
            $("#table_empleados").DataTable({
                language: {
                    url: "//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json",
                },
            });
        });
    </script>

</body>

</html>