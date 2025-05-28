document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animación de aparición al hacer scroll (reveal-on-scroll)
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Dejar de observar una vez que es visible
            }
        });
    }, {
        threshold: 0.1, // El 10% del elemento debe ser visible para activar
        rootMargin: '0px 0px -50px 0px' // Empezar a animar 50px antes de que llegue al final de la vista
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });

    console.log('JavaScript cargado y listo para interactuar.');
});