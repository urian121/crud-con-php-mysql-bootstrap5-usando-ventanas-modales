/**
 * Modal para agregar un nuevo empleado
 */
async function modalRegistrarEmpleado() {
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
      // Llamar a la función insertEmpleadoTable para insertar el nuevo registro en la tabla
      window.insertEmpleadoTable();

      setTimeout(() => {
        $("#staticBackdrop").css("opacity", "");
        $("#staticBackdrop").modal("hide");

        //Llamar a la función para mostrar un mensaje de éxito
        toastr.options = window.toastrOptions;
        toastr.success("¡El empleado se actualizo correctamente!.");
      }, 600);
    } else {
      console.error("Error al registrar el empleado");
    }
  } catch (error) {
    console.error("Error al enviar el formulario", error);
  }
}
