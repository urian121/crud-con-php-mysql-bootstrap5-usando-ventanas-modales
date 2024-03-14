/**
 * Modal para agregar un nuevo empleado
 */
async function modalAdd() {
  try {
    // Realizar una solicitud GET usando Fetch
    const response = await fetch("modales/modalAdd.php");

    if (!response.ok) {
      throw new Error("Error al cargar la modal");
    }

    const data = await response.text();

    // Crear un elemento div para almacenar el contenido de la modal
    const modalContainer = document.createElement("div");
    modalContainer.innerHTML = data;

    // Agregar la modal al documento actual
    document.body.appendChild(modalContainer);

    // Mostrar la modal
    const myModal = new bootstrap.Modal(modalContainer.querySelector(".modal"));
    myModal.show();
  } catch (error) {
    console.error(error);
  }
}

/**
 * Modal para confirmar la eliminación de un empleado
 */
async function cargarModalConfirmacion() {
  try {
    // Realizar una solicitud GET usando Fetch para obtener el contenido de la modal
    const response = await fetch("modales/modalDelete.php");

    if (!response.ok) {
      throw new Error("Error al cargar la modal de confirmación");
    }

    // Obtener el contenido de la modal
    const modalHTML = await response.text();

    // Crear un elemento div para almacenar el contenido de la modal
    const modalContainer = document.createElement("div");
    modalContainer.innerHTML = modalHTML;

    // Agregar la modal al documento actual
    document.body.appendChild(modalContainer);

    // Mostrar la modal
    const myModal = new bootstrap.Modal(modalContainer.querySelector(".modal"));
    myModal.show();
  } catch (error) {
    console.error(error);
  }
}

/**
 * Función para eliminar un empleado desde la modal
 */
async function eliminarEmpleado(idEmpleado, avatarEmpleado) {
  try {
    // Llamar a la función para cargar y mostrar la modal de confirmación
    await cargarModalConfirmacion();

    // Establecer el ID y la ruta del avatar del empleado en el botón de confirmación
    document
      .getElementById("confirmDeleteBtn")
      .setAttribute("data-id", idEmpleado);
    document
      .getElementById("confirmDeleteBtn")
      .setAttribute("data-avatar", avatarEmpleado);

    // Agregar un event listener al botón "Eliminar empleado"
    document
      .getElementById("confirmDeleteBtn")
      .addEventListener("click", async function () {
        // Obtener el ID y la ruta del avatar del empleado a eliminar
        var idEmpleado = this.getAttribute("data-id");
        var avatarEmpleado = this.getAttribute("data-avatar");

        try {
          const response = await axios.post("acciones/delete.php", {
            id: idEmpleado,
            avatar: avatarEmpleado,
          });

          if (response.status === 200) {
            // Eliminar la fila correspondiente a este empleado de la tabla
            document.querySelector(`#empleado_${idEmpleado}`).remove();
          } else {
            alert(`Error al eliminar el empleado con ID ${idEmpleado}`);
          }
        } catch (error) {
          console.error(error);
          alert("Hubo un problema al eliminar al empleado");
        } finally {
          // Cerrar la modal de confirmación
          var confirmModal = bootstrap.Modal.getInstance(
            document.getElementById("confirmModal")
          );
          confirmModal.hide();
        }
      });
  } catch (error) {
    console.error(error);
    alert("Hubo un problema al cargar la modal de confirmación");
  }
}

/**
 * Función para mostrar la modal de detalles del empleado
 */
async function verDetallesEmpleado(idEmpleado) {
  try {
    // Ocultar la modal si está abierta
    const existingModal = document.getElementById("detalleEmpleadoModal");
    if (existingModal) {
      const modal = bootstrap.Modal.getInstance(existingModal);
      if (modal) {
        modal.hide();
      }
      existingModal.remove(); // Eliminar la modal existente
    }

    // Buscar la Modal de Detalles
    const response = await fetch("modales/modalDetalles.php");
    if (!response.ok) {
      throw new Error("Error al cargar la modal de detalles del empleado");
    }
    const modalHTML = await response.text();

    // Crear un elemento div para almacenar el contenido de la modal
    const modalContainer = document.createElement("div");
    modalContainer.innerHTML = modalHTML;

    // Agregar la modal al documento actual
    document.body.appendChild(modalContainer);

    // Mostrar la modal
    const myModal = new bootstrap.Modal(
      modalContainer.querySelector("#detalleEmpleadoModal")
    );
    myModal.show();

    await cargarDetalleEmpleado(idEmpleado);
  } catch (error) {
    console.error(error);
  }
}

/**
 * Función para cargar y mostrar los detalles del empleado en la modal
 */
async function cargarDetalleEmpleado(idEmpleado) {
  try {
    const response = await axios.get(
      `acciones/detallesEmpleado.php?id=${idEmpleado}`
    );
    if (response.status === 200) {
      console.log(response.data);
      const { nombre, edad, cedula, sexo, telefono, cargo, avatar } =
        response.data;
      const avatarURL = avatar ? `acciones/fotos_empleados/${avatar}` : null;
      const avatarExistente = avatarURL
        ? await verificarExistenciaImagen(avatarURL)
        : false;
      const avatarHTML = avatarExistente
        ? `<img src="${avatarURL}" alt="Avatar" style="width: 100px; height: 100px; display:block;">`
        : "No disponible";

      // Limpiar el contenido existente de la lista ul

      const ulDetalleEmpleado = document.querySelector(
        "#detalleEmpleadoContenido ul"
      );

      ulDetalleEmpleado.innerHTML = ` 
        <li class="list-group-item"><b>Nombre:</b> 
          ${nombre ? nombre : "No disponible"}
        </li>
        <li class="list-group-item"><b>Edad:</b> 
          ${edad ? edad : "No disponible"}
        </li>
        <li class="list-group-item"><b>Cédula:</b> 
          ${cedula ? cedula : "No disponible"}
          </li>
        <li class="list-group-item"><b>Sexo:</b>
         ${sexo ? sexo : "No disponible"}
        </li>
        <li class="list-group-item"><b>Teléfono:</b> ${
          telefono ? telefono : "No disponible"
        }</li>
        <li class="list-group-item"><b>Cargo:</b> 
          ${cargo ? cargo : "No disponible"}
        </li>
         <li class="list-group-item"><b>Avatar:</b> ${avatarHTML}</li>
      `;
    } else {
      alert(`Error al cargar los detalles del empleado con ID ${idEmpleado}`);
    }
  } catch (error) {
    console.error(error);
    alert("Hubo un problema al cargar los detalles del empleado");
  }
}

// Función para verificar la existencia de una imagen
async function verificarExistenciaImagen(url) {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok;
  } catch (error) {
    console.error("Error al verificar la existencia de la imagen:", error);
    return false;
  }
}
