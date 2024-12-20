// Código específico para la página de Producto
document.addEventListener("DOMContentLoaded", () => {
    const agregarCarritoBtn = document.getElementById("agregar-carrito");
    const tallaSelect = document.getElementById("talla");
    const cantidadInput = document.getElementById("cantidad");

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

        // Calcular precios
        const precioUnitario = producto.precio;
        const precioTotal = precioUnitario * cantidadSeleccionada;

        alert(
            `La remera:\n` +
            `Talla: ${tallaSeleccionada}\n` +
            `Cantidad: ${cantidadSeleccionada}\n` +
            `Precio unitario: $${precioUnitario.toLocaleString()}\n` +
            `Precio total: $${precioTotal.toLocaleString()}\n` +
            `Se agregó al carrito efectivamente.`
        );

        window.location.href = "index.html";
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
    // Más productos aquí
];

// Obtener el id del producto desde la URL
const urlParams = new URLSearchParams(window.location.search);
const productoId = urlParams.get("id");

// Buscar el producto correspondiente
const producto = productos.find(p => p.nombre === productoId);

if (producto) {
    // Mostrar los detalles del producto en la página
    document.querySelector(".camisa__imagen").src = producto.imagen;
    document.querySelector(".camisa__imagen").alt = `Imagen de ${producto.nombre}`;
    document.querySelector("h1").innerText = producto.nombre;
    document.querySelector(".camisa__contenido p").innerText = producto.descripcionAmpliada;

    // Precio del producto
    const precioElemento = document.createElement("p");
    precioElemento.classList.add("camisa__precio");
    precioElemento.innerText = `Precio: $${producto.precio.toLocaleString()}`;
    document.querySelector(".camisa__contenido").prepend(precioElemento);
} else {
    // Si no se encuentra el producto, mostrar un mensaje de error
    document.querySelector("main.contenedor").innerHTML = `
        <h1>Producto no encontrado</h1>
        <p>Lo sentimos, el producto que buscas no está disponible. <a href="index.html">Volver a la tienda</a>.</p>
    `;
}
