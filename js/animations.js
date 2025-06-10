/**
 * Animaciones para Retícula Creativa
 * Utilizando anime.js para animaciones fluidas y personalizadas
 */

document.addEventListener('DOMContentLoaded', function() {
    // Verificar si anime.js está cargado
    if (typeof anime === 'undefined') {
        console.warn('anime.js no está cargado. Las animaciones no funcionarán correctamente.');
        return;
    }

    // Animación del encabezado hero
    const heroAnimation = () => {
        anime({
            targets: '.hero__title span',
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 1000,
            delay: anime.stagger(200),
            easing: 'easeOutExpo'
        });

        anime({
            targets: '.hero__description',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 1000,
            delay: 800,
            easing: 'easeOutExpo'
        });

        anime({
            targets: '.hero__btn',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 1000,
            delay: 1000,
            easing: 'easeOutExpo'
        });
    };

    // Animación de las tarjetas de características al hacer scroll
    const animateFeatures = () => {
        const features = document.querySelectorAll('.feature__card');
        if (!features.length) return;

        anime({
            targets: features,
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 1000,
            delay: anime.stagger(200, { start: 300 }),
            easing: 'easeOutExpo',
            autoplay: false
        }).play();
    };

    // Animación de los pilares de la sección "Sobre Nosotros"
    const animatePillars = () => {
        const pillars = document.querySelectorAll('.about__pillar');
        if (!pillars.length) return;

        anime({
            targets: pillars,
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 800,
            delay: anime.stagger(150, { start: 200 }),
            easing: 'easeOutExpo',
            autoplay: false
        }).play();
    };

    // Animación de las tarjetas del portafolio
    const animatePortfolio = () => {
        const items = document.querySelectorAll('.portfolio__item');
        if (!items.length) return;

        anime({
            targets: items,
            translateY: [60, 0],
            opacity: [0, 1],
            duration: 1000,
            delay: anime.stagger(100, { start: 100 }),
            easing: 'easeOutExpo',
            autoplay: false
        }).play();
    };

    // Animación de los elementos del formulario de contacto
    const animateContactForm = () => {
        const formElements = document.querySelectorAll('.contact__form .form__field');
        if (!formElements.length) return;

        anime({
            targets: formElements,
            translateX: [-30, 0],
            opacity: [0, 1],
            duration: 800,
            delay: anime.stagger(100, { start: 100 }),
            easing: 'easeOutExpo',
            autoplay: false
        }).play();
    };

    // Animación de los números de estadísticas (si existen)
    const animateStats = () => {
        const stats = document.querySelectorAll('.stat__number');
        if (!stats.length) return;

        stats.forEach(stat => {
            const value = parseInt(stat.textContent);
            const suffix = stat.getAttribute('data-suffix') || '';
            
            anime({
                targets: stat,
                textContent: [0, value],
                round: 1,
                duration: 2000,
                delay: 500,
                easing: 'easeOutExpo',
                update: function(anim) {
                    stat.textContent = Math.floor(anim.animations[0].currentValue) + suffix;
                }
            });
        });
    };

    // Función para verificar si un elemento está en el viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // Manejar animaciones al hacer scroll
    const handleScrollAnimations = () => {
        const animatedSections = document.querySelectorAll('[data-animate]');
        
        animatedSections.forEach(section => {
            if (isInViewport(section) && !section.classList.contains('animated')) {
                section.classList.add('animated');
                
                switch(section.getAttribute('data-animate')) {
                    case 'features':
                        animateFeatures();
                        break;
                    case 'pillars':
                        animatePillars();
                        break;
                    case 'portfolio':
                        animatePortfolio();
                        break;
                    case 'contact':
                        animateContactForm();
                        break;
                    case 'stats':
                        animateStats();
                        break;
                }
            }
        });
    };

    // Inicializar animaciones
    const initAnimations = () => {
        // Animación inicial del hero
        heroAnimation();
        
        // Configurar observador de intersección para animaciones al hacer scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    handleScrollAnimations();
                }
            });
        }, observerOptions);

        // Observar secciones con el atributo data-animate
        document.querySelectorAll('[data-animate]').forEach(section => {
            observer.observe(section);
        });

        // Manejar animaciones en el evento de scroll
        window.addEventListener('scroll', handleScrollAnimations);
    };

    // Función eliminada: setupThemeSwitcher
    // Se ha eliminado la funcionalidad de tema oscuro
    
    // Mejorar la función de animación al hacer scroll
    const setupScrollAnimations = () => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Deja de observar una vez que se ha mostrado
                }
            });
        }, observerOptions);

        // Observar elementos con la clase fade-in
        document.querySelectorAll('.fade-in').forEach(element => {
            observer.observe(element);
        });
    };
    
    // Inicializar animaciones cuando el DOM esté completamente cargado
    const initAll = () => {
        initAnimations();
        setupThemeSwitcher();
        setupScrollAnimations();
    };
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAll);
    } else {
        initAll();
    }

    // Agregar clase al hacer hover en los botones
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', (e) => {
            anime({
                targets: e.target,
                scale: 1.05,
                duration: 200,
                easing: 'easeOutExpo'
            });
        });

        button.addEventListener('mouseleave', (e) => {
            anime({
                targets: e.target,
                scale: 1,
                duration: 200,
                easing: 'easeOutExpo'
            });
        });
    });

    // Animación suave para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Efecto de partículas para el fondo (opcional)
function initParticles() {
    // Solo se ejecutará si se incluye particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#FF6B6B' },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: '#FF6B6B', opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2, direction: 'none', random: true, straight: false, out_mode: 'out' }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'grab' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                }
            },
            retina_detect: true
        });
    }
}

// Inicializar partículas cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initParticles);
} else {
    initParticles();
}
