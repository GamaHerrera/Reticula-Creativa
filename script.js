/**
 * Script Principal - Retícula Creativa
 * Funcionalidad general del sitio web
 */

document.addEventListener('DOMContentLoaded', function () {
    // ==========================================
    // NAVEGACIÓN MÓVIL
    // ==========================================
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav__link');

    // Mostrar menú
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    // Ocultar menú
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    });

    // ==========================================
    // SCROLL ACTIVO EN NAVEGACIÓN
    // ==========================================
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const sectionLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

            if (sectionLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    sectionLink.classList.add('active');
                } else {
                    sectionLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', scrollActive);

    // ==========================================
    // CAMBIO DE HEADER AL HACER SCROLL
    // ==========================================
    const header = document.querySelector('.header');

    function scrollHeader() {
        if (window.scrollY >= 50) {
            header.classList.add('scroll-header');
        } else {
            header.classList.remove('scroll-header');
        }
    }

    window.addEventListener('scroll', scrollHeader);

    // ==========================================
    // SMOOTH SCROLL PARA ENLACES INTERNOS
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = header ? header.offsetHeight : 80;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==========================================
    // AÑO ACTUAL EN FOOTER
    // ==========================================
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // ==========================================
    // FUNCIONALIDAD DE BÚSQUEDA
    // ==========================================
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-input');

    if (searchForm) {
        searchForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const searchTerm = searchInput.value.trim();

            if (searchTerm) {
                console.log('Búsqueda:', searchTerm);
                // Aquí puedes implementar la lógica de búsqueda
                // Por ejemplo, filtrar artículos o redirigir a una página de resultados
                alert(`Buscando: "${searchTerm}"\n\nEsta funcionalidad se implementará con el backend.`);
                searchInput.value = '';
            }
        });
    }

    // ==========================================
    // SCROLL TO TOP (si existe el botón)
    // ==========================================
    const scrollUpBtn = document.getElementById('scroll-up');

    if (scrollUpBtn) {
        function showScrollUp() {
            if (window.scrollY >= 350) {
                scrollUpBtn.classList.add('show-scroll');
            } else {
                scrollUpBtn.classList.remove('show-scroll');
            }
        }

        window.addEventListener('scroll', showScrollUp);

        scrollUpBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ==========================================
    // LAZY LOADING DE IMÁGENES
    // ==========================================
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // ==========================================
    // ANIMACIÓN DE ENTRADA PARA ELEMENTOS
    // ==========================================
    const fadeElements = document.querySelectorAll('.fade-in');

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(element => fadeObserver.observe(element));

    // ==========================================
    // LOG DE INICIALIZACIÓN
    // ==========================================
    console.log('✅ Retícula Creativa - Script principal cargado correctamente');
});
