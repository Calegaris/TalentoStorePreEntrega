// Código específico para la página de Contacto
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector(".form-contacto");

    formulario.addEventListener("submit", (evento) => {
        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (!nombre || !apellido || !email || !mensaje) {
            console.log("Por favor, completa todos los campos.");
            evento.preventDefault(); // Evita el envío del formulario
        } else {
            console.log("Todos los campos están completos. Enviando formulario...");
        }
    });
});
