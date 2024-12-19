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

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('.form-contacto'); // Seleccionamos el formulario por su clase

    formulario.addEventListener('submit', async (event) => {
        event.preventDefault(); // Evitamos el envío estándar del formulario

        const formData = new FormData(formulario);

        // Extraer los valores del formulario
        const nombre = formData.get('nombre') || '';
        const apellido = formData.get('apellido') || '';
        const email = formData.get('email') || '';
        const mensaje = formData.get('mensaje') || '';

        try {
            // Enviar los datos a Formspree
            const response = await fetch(formulario.action, {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            });

            if (response.ok) {
                // Mostrar una alerta con los datos enviados
                alert(`¡Formulario enviado con éxito!
Datos enviados:
- Nombre: ${nombre} ${apellido}
- Email: ${email}
- Mensaje: ${mensaje}`);

                formulario.reset(); // Limpiar el formulario después de enviarlo
            } else {
                alert('Hubo un problema al enviar el formulario. Por favor, intenta de nuevo más tarde.');
            }
        } catch (error) {
            alert('Ocurrió un error inesperado. Por favor, revisa tu conexión a internet e intenta de nuevo.');
        }
    });
});
