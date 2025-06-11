document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el carrusel
    if (document.querySelector('.glide')) {
        new Glide('.glide', {
            type: 'carousel',
            startAt: 0,
            perView: 3,
            gap: 30,
            autoplay: 5000,
            hoverpause: true,
            animationDuration: 800,
            animationTimingFunc: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
            breakpoints: {
                1200: {
                    perView: 2.5,
                    gap: 20
                },
                992: {
                    perView: 2,
                    gap: 15
                },
                768: {
                    perView: 1.2,
                    gap: 15
                },
                576: {
                    perView: 1,
                    gap: 10
                }
            }
        }).mount();
    }
});
