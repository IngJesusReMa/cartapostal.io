document.addEventListener('DOMContentLoaded', () => {
    const seal = document.querySelector('.seal');
    const envelope = document.querySelector('.envelope');
    const letter = document.querySelector('.letter'); // Obtenemos la carta

    // Función para abrir el sobre
    const openEnvelope = () => {
        if (!envelope.classList.contains('open')) {
            envelope.classList.add('open');
            // La visibilidad de la carta se controla completamente con CSS usando transition-delay
            // y pointer-events.
        }
    };

    // Función para cerrar el sobre (si quieres la opción de cerrarlo de nuevo)
    const closeEnvelope = () => {
        if (envelope.classList.contains('open')) {
            envelope.classList.remove('open');
            // Al cerrar, la carta volverá a su estado inicial por CSS
        }
    };

    seal.addEventListener('click', () => {
        // Al hacer clic en el sello, abrimos el sobre
        openEnvelope();
    });

    // Opcional: Podrías añadir un evento para cerrar el sobre al hacer clic en la carta, por ejemplo
    // letter.addEventListener('click', () => {
    //     closeEnvelope();
    // });

    // Opcional: Si quieres que el sobre se cierre al hacer clic fuera de él
    // document.addEventListener('click', (event) => {
    //     if (!envelope.contains(event.target) && envelope.classList.contains('open')) {
    //         closeEnvelope();
    //     }
    // });
});