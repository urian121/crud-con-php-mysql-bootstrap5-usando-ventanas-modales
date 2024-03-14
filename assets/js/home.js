async function eliminarEmpleado(id, nombre) {
  if (confirm("¿Estás seguro de que deseas eliminar este empleado?")) {
    try {
      const response = await axios.post("acciones/delete.php", {
        id,
        nombre,
      });
      if (response.status === 200) {
        document.querySelector(`#empleado_${id}`).remove();
      } else {
        alert("Error al eliminar el empleado");
      }
    } catch (error) {
      console.error("Error al eliminar el empleado:", error);
      alert("Error al eliminar el empleado");
    }
  }
}
