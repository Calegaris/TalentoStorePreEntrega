document.addEventListener("DOMContentLoaded", () => {
    if (document.title !== "Talento Store") {
        document.title = "Talento Store";
    }

    const agregarCarritoBtn = document.getElementById("agregar-carrito");
    const tallaSelect = document.getElementById("talla");
    const cantidadInput = document.getElementById("cantidad");

    const headerTitle = document.querySelector("header h1");
    if (headerTitle && headerTitle.innerText !== "Talento Store") {
        headerTitle.innerText = "Talento Store";
    }

    // Inicializar el carrito desde localStorage o crear uno vacío
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    agregarCarritoBtn.addEventListener("click", () => {
        const tallaSeleccionada = tallaSelect.value;
        const cantidadSeleccionada = parseInt(cantidadInput.value, 10);

        if (
            tallaSeleccionada === "--Seleccionar Talla" ||
            isNaN(cantidadSeleccionada) ||
            cantidadSeleccionada <= 0
        ) {
            alert("Por favor, selecciona una talla y cantidad válida.");
            return;
        }

        const precioUnitario = producto.precio;
        const precioTotal = precioUnitario * cantidadSeleccionada;

        // Agregar producto al carrito
        const productoCarrito = {
            nombre: producto.nombre,
            talla: tallaSeleccionada,
            cantidad: cantidadSeleccionada,
            precioUnitario,
            precioTotal,
            imagen: producto.imagen
        };

        carrito.push(productoCarrito);
        localStorage.setItem("carrito", JSON.stringify(carrito));

        alert(
            `La remera:\n` +
            `Talla: ${tallaSeleccionada}\n` +
            `Cantidad: ${cantidadSeleccionada}\n` +
            `Precio unitario: $${precioUnitario.toLocaleString()}\n` +
            `Precio total: $${precioTotal.toLocaleString()}\n` +
            `Se agregó al carrito efectivamente.`
        );

        // Redirigir o actualizar vista
        window.location.href = "index.html";
    });

    // Evento para presionar Enter y añadir al carrito
    cantidadInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevenir la acción por defecto (enviar formulario)
            agregarCarritoBtn.click(); // Llamar a la función del clic en el botón
        }
    });
});

// Array de productos
const productos = [
    {
        nombre: "Remera 1",
        precio: 17000,
        imagen: "img/Captura de pantalla 2024-11-17 190052.png",
        descripcionAmpliada: "Esta es una remera de alta calidad, ideal para cualquier ocasión. Hecha con algodón 100%."
    },
    {
        nombre: "Remera 2",
        precio: 18500,
        imagen: "img/Captura de pantalla 2024-11-17 190437.png",
        descripcionAmpliada: "Esta remera tiene un diseño exclusivo, perfecta para los fanáticos de la moda y la comodidad."
    },
    // Otros productos...
];

const urlParams = new URLSearchParams(window.location.search);
const productoId = urlParams.get("id");

const producto = productos.find(p => p.nombre === productoId);

if (producto) {
    document.getElementById("titulo-producto").innerText = producto.nombre;
    document.getElementById("producto-imagen").src = producto.imagen;
    document.getElementById("producto-imagen").alt = `Imagen de ${producto.nombre}`;
    document.getElementById("producto-descripcion").innerText = producto.descripcionAmpliada;

    const precioElemento = document.createElement("p");
    precioElemento.classList.add("camisa__precio");
    precioElemento.innerText = `Precio: $${producto.precio.toLocaleString()}`;
    document.querySelector(".camisa__contenido").prepend(precioElemento);
} else {
    document.querySelector("main.contenedor").innerHTML = `
        <h1>Producto no encontrado</h1>
        <p>Lo sentimos, el producto que buscas no está disponible. <a href="index.html">Volver a la tienda</a>.</p>
    `;
}
