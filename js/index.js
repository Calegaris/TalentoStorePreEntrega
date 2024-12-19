// Código específico para la página de inicio
console.log("Página de inicio cargada");

const productos = [
    {
        nombre: "Remera 1",
        precio: 17000,
        imagen: "img/Captura de pantalla 2024-11-17 190052.png",
        enlace: "producto.html",
        descripcionAmpliada: "Esta es una remera de alta calidad, ideal para cualquier ocasión. Hecha con algodón 100%."
    },
    {
        nombre: "Remera 2",
        precio: 18500,
        imagen: "img/Captura de pantalla 2024-11-17 190437.png",
        enlace: "producto2.html",
        descripcionAmpliada: "Esta remera tiene un diseño exclusivo, perfecta para los fanáticos de la moda y la comodidad."
    },
    // Puedes agregar más productos con sus descripciones ampliadas
];

// Ciclo para recorrer los productos y mostrar en la consola
productos.forEach((producto) => {
    console.log(`Producto: ${producto.nombre}`);
    console.log(`Precio: $${producto.precio}`);
    console.log(`Imagen: ${producto.imagen}`);
    console.log(`Enlace: ${producto.enlace}`);
    console.log("----------------------------");
});

function mostrarProductos(productos) {
    const contenedorProductos = document.querySelector('.productos__contenedor');
    contenedorProductos.innerHTML = ''; // Limpiar contenedor

    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');

        productoDiv.innerHTML = `
            <a href="${producto.enlace}">
                <img class="producto__imagen" src="${producto.imagen}" alt="${producto.nombre}">
                <h3 class="producto__nombre">${producto.nombre}</h3>
                <p class="producto__descripcion">$${producto.precio.toLocaleString()}</p>
            </a>
            <button class="ver-descripcion">Ver descripción completa</button>
            <p class="descripcion-ampliada" style="display: none;">${producto.descripcionAmpliada}</p>
        `;

        // Evento para mostrar la descripción ampliada
        const botonDescripcion = productoDiv.querySelector('.ver-descripcion');
        const descripcionAmpliada = productoDiv.querySelector('.descripcion-ampliada');

        botonDescripcion.addEventListener('click', () => {
            descripcionAmpliada.style.display = descripcionAmpliada.style.display === 'none' ? 'block' : 'none';
        });

        contenedorProductos.appendChild(productoDiv);
    });
}

// Llamamos la función para mostrar los productos
mostrarProductos(productos);
