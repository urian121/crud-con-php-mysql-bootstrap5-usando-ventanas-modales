/**
 * Modal para agregar un nuevo empleado
 */
async function modalRegistrarEmpleado() {
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

    // Eliminar modal anterior de agregar empleado si existe
    const existingAddModal = document.getElementById("agregarEmpleadoModal");
    if (existingAddModal) {
      const modal = bootstrap.Modal.getInstance(existingAddModal);
      if (modal) {
        modal.hide();
      }
      existingAddModal.parentElement.remove(); // Eliminar el contenedor completo
    }

    const response = await fetch("modales/modalAdd.php");

    if (!response.ok) {
      throw new Error("Error al cargar la modal");
    }

    // response.text() es un método en programación que se utiliza para obtener el contenido de texto de una respuesta HTTP
    const data = await response.text();

    // Crear un elemento div para almacenar el contenido de la modal
    const modalContainer = document.createElement("div");
    modalContainer.innerHTML = data;

    // Agregar la modal al documento actual
    document.body.appendChild(modalContainer);

    // Mostrar la modal
    const myModal = new bootstrap.Modal(
      modalContainer.querySelector("#agregarEmpleadoModal")
    );
    myModal.show();
  } catch (error) {
    console.error(error);
  }
}

/**
 * Función para enviar el formulario al backend
 */
async function registrarEmpleado(event) {
  try {
    event.preventDefault(); // Evitar que la página se recargue al enviar el formulario

    const formulario = document.querySelector("#formularioEmpleado");
    // Crear un objeto FormData para enviar los datos del formulario
    const formData = new FormData(formulario);

    // Enviar los datos del formulario al backend usando Axios
    const response = await axios.post("acciones/acciones.php", formData);

    // Verificar la respuesta del backend
    if (response.status === 200) {
      // Resetear el formulario después del registro exitoso
      formulario.reset();
      
      // Llamar a la función insertEmpleadoTable para insertar el nuevo registro en la tabla
      window.insertEmpleadoTable();

      setTimeout(() => {
        const modalEl = document.getElementById("agregarEmpleadoModal");
        modalEl.style.opacity = "";
        bootstrap.Modal.getInstance(modalEl).hide();

        // Mostrar un mensaje de éxito al usuario
        showToast.success("¡Empleado registrado con éxito!", {
          duration: 4000,
          progress: true,
          position: "top-left",
          transition: "swingInverted",
          icon: '',
          sound: true,
        });
        
      }, 600);
    } else {
      console.error("Error al registrar el empleado");
    }
  } catch (error) {
    console.error("Error al enviar el formulario", error);
  }
}
