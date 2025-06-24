document.addEventListener('DOMContentLoaded', () => {

    // --- PANTALLA DE CARGA ---
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        window.addEventListener('load', () => loadingScreen.classList.add('hidden'));
    }

    // --- HEADER INTERACTIVO ---
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // --- ANIMACIONES AL HACER SCROLL ---
    const scrollElements = document.querySelectorAll('[data-scroll]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: dejar de observar el elemento una vez es visible
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 // El elemento se considera visible cuando el 10% está en pantalla
    });

    scrollElements.forEach(el => observer.observe(el));


    // --- LÓGICA DEL MENÚ MÓVIL (SIN CAMBIOS) ---
    const hamburger = document.getElementById('hamburger-menu');
    const mainNav = document.querySelector('.main-nav');
    if (hamburger && mainNav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
    }

    // --- LÓGICA DEL CARRUSEL (SIN CAMBIOS) ---
    // ... Pega aquí todo el código del carrusel del script.js anterior ...
});