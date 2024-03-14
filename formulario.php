<?php
if (isset($datoEmpleadoEdit['id'])) { ?>
    <a href="./" class="float-end"><i class="bi bi-arrow-right-circle"></i></a>
<?php } ?>

<form action="<?php echo isset($datoEmpleadoEdit['id']) ? 'acciones/updateEmpleado.php' : 'acciones/acciones.php'; ?>" method="POST" enctype="multipart/form-data">
    <?php if (isset($datoEmpleadoEdit['id'])) { ?>
        <input type="hidden" name="id" value="<?php echo $datoEmpleadoEdit['id']; ?>" />
    <?php } ?>
    <div class="mb-3">
        <label class="form-label">Nombre</label>
        <input type="text" name="nombre" class="form-control" value="<?php echo isset($datoEmpleadoEdit['nombre']) ? $datoEmpleadoEdit['nombre'] : ''; ?>" />
    </div>
    <div class="mb-3">
        <label class="form-label">Cédula (NIT)</label>
        <input type="text" name="cedula" class="form-control" value="<?php echo isset($datoEmpleadoEdit['cedula']) ? $datoEmpleadoEdit['cedula'] : ''; ?>" />
    </div>
    <div class="row">
        <div class="col-md-6">
            <label class="form-label">Seleccione la edad</label>
            <select class="form-select" name="edad" required>
                <option value="">Edad</option>
                <?php
                for ($i = 18; $i <= 50; $i++) {
                    $selected = isset($datoEmpleadoEdit['edad']) && $datoEmpleadoEdit['edad'] == $i ? 'selected' : '';
                    echo "<option value='$i' $selected>$i</option>";
                } ?>
            </select>
        </div>

        <div class="col-md-6">
            <label class="form-label">Sexo</label>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="sexo" id="sexo_m" value="Masculino" <?php echo (isset($datoEmpleadoEdit['sexo']) && $datoEmpleadoEdit['sexo'] == 'Masculino') ? 'checked' : ''; ?> checked>
                <label class="form-check-label" for="sexo_m">
                    Masculino
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="sexo" id="sexo_f" value="Femenino" <?php echo (isset($datoEmpleadoEdit['sexo']) && $datoEmpleadoEdit['sexo'] == 'Femenino') ? 'checked' : ''; ?>>
                <label class="form-check-label" for="sexo_f">
                    Femenino
                </label>
            </div>
        </div>
    </div>

    <div class="mb-3">
        <label class="form-label">Teléfono</label>
        <input type="number" name="telefono" class="form-control" value="<?php echo isset($datoEmpleadoEdit['telefono']) ? $datoEmpleadoEdit['telefono'] : ''; ?>" required />
    </div>

    <div class="mb-3">
        <label class="form-label">Seleccione el Cargo</label>
        <select name="cargo" class="form-select" required>
            <option selected value="">Cargo</option>
            <?php
            $cargos = array(
                "Gerente",
                "Asistente",
                "Analista",
                "Contador",
                "Secretario",
                "Desarrollador Web"
            );
            foreach ($cargos as $cargo) {
                // Verificamos si el valor del cargo coincide con el valor guardado en $datoEmpleadoEdit['cargo']
                $selected = ($cargo == $datoEmpleadoEdit['cargo']) ? 'selected' : '';
                // Imprimimos la opción con el atributo selected si corresponde
                echo "<option value='$cargo' $selected>$cargo</option>";
            }
            ?>
        </select>
    </div>
    <?php
    if (isset($datoEmpleadoEdit['id'])) { ?>
        <div class="mb-3 mt-4">
            <label class="form-label">Foto actual del empleado </label>
            <br>
            <img style="display: block;" class="rounded-circle float-start" src="acciones/fotos_empleados/<?php echo $datoEmpleadoEdit['avatar']; ?>" alt="Foto del empleado" width="80">
        </div>
        <br> <br>
    <?php }
    ?>

    <div class="mb-3 mt-4">
        <label class="form-label">Cambiar Foto del empleado</label>
        <input class="form-control form-control-sm" type="file" name="avatar" accept="image/png, image/jpeg" <?php echo !isset($datoEmpleadoEdit['id']) ? 'required' : ''; ?> />
    </div>

    <div class="d-grid gap-2">
        <button type="submit" class="btn btn-primary btn_add">
            <?php echo isset($datoEmpleadoEdit['id']) ? 'Editar' : 'Agregar'; ?> empleado
        </button>

    </div>
</form>