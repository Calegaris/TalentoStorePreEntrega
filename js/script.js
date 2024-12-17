console.log("Archivo script.js enlazado correctamente");

// Capturar elementos del formulario
const agregarCarritoBtn = document.getElementById("agregar-carrito");
const tallaSelect = document.getElementById("talla");
const cantidadInput = document.getElementById("cantidad");

// Evento al hacer clic en el botón
agregarCarritoBtn.addEventListener("click", () => {
    const tallaSeleccionada = tallaSelect.value;
    const cantidadSeleccionada = cantidadInput.value;

    // Verificar que se hayan completado los campos
    if (tallaSeleccionada === "--Seleccionar Talla" || !cantidadSeleccionada) {
        alert("Por favor, selecciona una talla y cantidad válida.");
        return;
    }

    // Mostrar mensaje de confirmación
    alert(`La remera:\nTalla: ${tallaSeleccionada}\nCantidad: ${cantidadSeleccionada}\nse agregó al carrito efectivamente.`);

    // Redirigir a la página de inicio
    window.location.href = "index.html";
});
