
// Código específico para la página de Producto
document.addEventListener("DOMContentLoaded", () => {
    const agregarCarritoBtn = document.getElementById("agregar-carrito");
    const tallaSelect = document.getElementById("talla");
    const cantidadInput = document.getElementById("cantidad");

    agregarCarritoBtn.addEventListener("click", () => {
        const tallaSeleccionada = tallaSelect.value;
        const cantidadSeleccionada = cantidadInput.value;

        if (tallaSeleccionada === "--Seleccionar Talla" || !cantidadSeleccionada) {
            alert("Por favor, selecciona una talla y cantidad válida.");
            return;
        }

        alert(`La remera:\nTalla: ${tallaSeleccionada}\nCantidad: ${cantidadSeleccionada}\nse agregó al carrito efectivamente.`);
        window.location.href = "index.html";
    });
});
