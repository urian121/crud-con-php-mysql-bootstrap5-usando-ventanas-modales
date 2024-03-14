async function actualizarTablaEmpleados() {
  try {
    const response = await axios.get("acciones/listarEmpleados.php");
    if (response.status === 200) {
      // Actualizar el contenido de la tabla con los nuevos datos
      const empleados = response.data; // Obtener los datos de empleados desde la respuesta

      // Construir el HTML de la tabla con los datos obtenidos
      let tablaHTML = "";
      empleados.forEach((empleado) => {
        tablaHTML += `
          <tr id="empleado_${empleado.id}">
            <th scope="row">${empleado.id}</th>
            <td>${empleado.nombre}</td>
            <td>${empleado.edad}</td>
            <td>${empleado.cedula}</td>
            <td>${empleado.cargo}</td>
            <td>
              <img class="rounded-circle" src="acciones/fotos_empleados/${
                empleado.avatar || "sin-foto.jpg"
              }" alt="${empleado.nombre}" width="50" height="50">
            </td>
            <td>
              <a title="Ver detalles del empleado" href="#" onclick="verDetallesEmpleado(${
                empleado.id
              })" class="btn btn-success"><i class="bi bi-binoculars"></i></a>
              <a title="Editar datos del empleado" href="#" onclick="editarEmpleado(${
                empleado.id
              })" class="btn btn-warning"><i class="bi bi-pencil-square"></i></a>
              <a title="Eliminar datos del empleado" href="#" onclick="eliminarEmpleado(${
                empleado.id
              }, '${
          empleado.avatar || ""
        }')" class="btn btn-danger"><i class="bi bi-trash"></i></a>
            </td>
          </tr>
        `;
      });

      // Actualizar el contenido HTML de la tabla
      const tabla = document.querySelector("#table_empleados");
      tabla.innerHTML = tablaHTML;
    } else {
      console.error("Error al cargar la tabla de empleados");
    }
  } catch (error) {
    console.error("Error al actualizar la tabla de empleados", error);
  }
}

// Esperar a que el documento HTML se cargue completamente
document.addEventListener("DOMContentLoaded", async function () {
  // Llamar a la función para actualizar la tabla de empleados
  await actualizarTablaEmpleados();
});
