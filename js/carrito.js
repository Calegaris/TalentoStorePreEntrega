document.addEventListener("DOMContentLoaded", () => {
    const carritoContenido = document.getElementById("carrito-contenido");
    const totalCarrito = document.getElementById("total-carrito");
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Si el carrito está vacío
    if (carrito.length === 0) {
        carritoContenido.innerHTML = "<p>No hay productos en el carrito.</p>";
        totalCarrito.innerHTML = "";
        return;
    }

    // Mostrar productos en el carrito
    const actualizarCarrito = () => {
        carritoContenido.innerHTML = ''; // Limpiar contenido actual
        let total = 0;

        carrito.forEach((item, index) => {
            total += item.precioTotal;
            carritoContenido.innerHTML += `
                <div class="producto-carrito">
                    <p><strong>${item.nombre}</strong> - Talla: ${item.talla}</p>
                    <p>Precio Unitario: $${item.precioUnitario.toLocaleString()}</p>
                    <p>Total: $${item.precioTotal.toLocaleString()}</p>
                    <label for="cantidad-${index}">Cantidad:</label>
                    <input type="number" id="cantidad-${index}" value="${item.cantidad}" min="1" />
                    <button class="actualizar-cantidad" data-index="${index}">Actualizar</button>
                    <button class="eliminar-producto" data-index="${index}">Eliminar</button>
                    <hr>
                </div>
            `;
        });

        totalCarrito.innerHTML = `<h2>Total a pagar: $${total.toLocaleString()}</h2>`;

        // Agregar funcionalidad para actualizar cantidad
        document.querySelectorAll(".actualizar-cantidad").forEach(button => {
            button.addEventListener("click", (e) => {
                const index = e.target.dataset.index;
                const cantidadInput = document.getElementById(`cantidad-${index}`);
                const nuevaCantidad = parseInt(cantidadInput.value);

                if (nuevaCantidad > 0) {
                    carrito[index].cantidad = nuevaCantidad;
                    carrito[index].precioTotal = carrito[index].precioUnitario * nuevaCantidad;
                    localStorage.setItem("carrito", JSON.stringify(carrito)); // Actualizar localStorage
                    actualizarCarrito(); // Actualizar la visualización del carrito
                } else {
                    alert("La cantidad debe ser mayor que 0");
                }
            });
        });

        // Agregar funcionalidad para eliminar productos
        document.querySelectorAll(".eliminar-producto").forEach(button => {
            button.addEventListener("click", (e) => {
                const index = e.target.dataset.index;
                carrito.splice(index, 1); // Eliminar el producto del carrito
                localStorage.setItem("carrito", JSON.stringify(carrito)); // Actualizar localStorage
                actualizarCarrito(); // Actualizar la visualización del carrito
            });
        });
    };

    actualizarCarrito(); // Llamar para que cargue el carrito al inicio

    // Evento para finalizar compra
    document.getElementById("finalizar-compra").addEventListener("click", () => {
        alert("Gracias por tu compra!");
        localStorage.removeItem("carrito"); // Vaciar carrito
        window.location.href = "index.html"; // Volver al catálogo
    });
});
