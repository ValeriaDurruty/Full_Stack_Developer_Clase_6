document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // Navegación
    const navContainer = document.querySelector('.nav');
    const sections = document.querySelectorAll('.content-section');
    const forms = document.querySelectorAll('.needs-validation');

    navContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-link')) {
            e.preventDefault();
            const targetId = e.target.id.replace('-link', '');
            
            sections.forEach(section => {
                section.classList.toggle('d-none', section.id !== targetId);
            });

            navContainer.querySelectorAll('.nav-link').forEach(link => {
                link.classList.toggle('text-secondary', link === e.target);
            });
        }
    });

    // Validación de formularios
    forms.forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity() || !validacion(form)) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
});

function validacion(form) {
    const email = form.querySelector('#email').value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
        alert("La dirección de email no es válida.");
        return false;
    }
    
    return true;
}

// Alto contraste
document.addEventListener('DOMContentLoaded', function() {
    const contrastToggle = document.getElementById('contrast-toggle');
    let highContrastMode = false; // Variable para controlar el estado del alto contraste

    contrastToggle.addEventListener('click', function() {
        if (highContrastMode) {
            document.body.classList.remove('high-contrast'); // Remover alto contraste
            contrastToggle.innerHTML = '<i class="bi bi-toggle-on"></i> Alto Contraste'; // Actualizar el texto del botón
            highContrastMode = false; // Cambiar el estado a modo normal
        } else {
            document.body.classList.add('high-contrast'); // Aplicar alto contraste
            contrastToggle.innerHTML = '<i class="bi bi-toggle-off"></i> Normal'; // Actualizar el texto del botón
            highContrastMode = true; // Cambiar el estado a modo alto contraste
        }
    });
});

