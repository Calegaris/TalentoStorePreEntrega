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

// Función para mostrar los productos (locales y de la API)
function mostrarProductos(productos) {
    const contenedorProductos = document.querySelector('.productos__contenedor');
    contenedorProductos.innerHTML = ''; // Limpiar contenedor

    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');

        if (producto.enlace) {
            // Productos locales (con descripción expandida)
            productoDiv.innerHTML = `
                <a href="producto.html?id=${producto.nombre}">
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
        } else {
            // Productos de la API (con botón "Próximamente disponible")
            productoDiv.innerHTML = `
                <a href="#">
                    <img class="producto__imagen" src="${producto.image}" alt="${producto.title}">
                    <h3 class="producto__nombre">${producto.title}</h3>
                    <p class="producto__descripcion">$${producto.precio}</p>
                </a>
                <button class="proximamente">Próximamente disponible</button>
            `;
        }

        contenedorProductos.appendChild(productoDiv);
    });
}

// Llamamos la función para mostrar los productos
mostrarProductos(productos);

// Función para consumir la API y mostrar los productos
async function cargarProductosAPI() {
    const productosGrid = document.querySelector('.productos-grid');
    const tasaConversion = 1200; // Tasa de conversión fija de USD a ARS (puedes actualizarla según sea necesario)

    try {
        // Fetch a la API pública
        const respuesta = await fetch('https://fakestoreapi.com/products');
        const productosAPI = await respuesta.json();

        // Limitar los productos a mostrar a 4
        const productosLimitados = productosAPI.slice(0, 4);

        // Iterar sobre los productos limitados y crear las tarjetas
        productosLimitados.forEach(producto => {
            const card = document.createElement('div');
            card.classList.add('card');

            // Convertir el precio a pesos
            const precioEnPesos = (producto.price * tasaConversion).toFixed(2);

            card.innerHTML = `
                <img class="card__imagen" src="${producto.image}" alt="${producto.title}">
                <div class="card__contenido">
                    <h3 class="card__titulo">${producto.title}</h3>
                    <p class="card__precio">$${precioEnPesos}</p>
                    <button class="card__boton">Próximamente disponible</button>
                </div>
            `;

            // Agregar la tarjeta al grid
            productosGrid.appendChild(card);
        });
    } catch (error) {
        console.error('Error al cargar los productos de la API:', error);
        productosGrid.innerHTML = `<p>Error al cargar los productos. Intenta nuevamente más tarde.</p>`;
    }
}

// Llamar a la función después de que el DOM esté cargado
document.addEventListener('DOMContentLoaded', cargarProductosAPI);
