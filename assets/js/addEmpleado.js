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
      console.log("Empleado registrado exitosamente");
      setTimeout(() => {
        $("#staticBackdrop").css("opacity", "");
        $("#staticBackdrop").modal("hide");
      }, 600);
    } else {
      console.error("Error al registrar el empleado");
    }
  } catch (error) {
    console.error("Error al enviar el formulario", error);
  }
}
