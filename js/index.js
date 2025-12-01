// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', () => {
    
    // Intersection Observer pour les animations au scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optionnel : arrêter d'observer après l'animation pour de meilleures performances
                revealObserver.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px' // Déclenche l'animation un peu avant que l'élément soit visible
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // Animation des cartes au hover (correction : ne pas écraser les styles CSS)
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Utiliser une classe au lieu de modifier directement le style
            this.style.transform = 'translateY(-15px) rotate(3deg)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // Parallax effet léger sur le hero (optimisé avec requestAnimationFrame)
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const hero = document.querySelector('.hero');
                if (hero) {
                    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                }
                ticking = false;
            });
            ticking = true;
        }
    });
});
