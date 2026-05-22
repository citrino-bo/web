document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                const header = document.querySelector('.header');
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    });
    
    const scrollElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    scrollElements.forEach(el => {
        observer.observe(el);
    });

    // ── Umami custom events ──────────────────────────────────

    function track(event, data) {
        if (window.umami && typeof window.umami.track === 'function') {
            window.umami.track(event, data);
        }
    }

    // CTA clicks
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', () => track('cta-primary-click', { href: btn.getAttribute('href') || '' }));
    });
    document.querySelectorAll('.btn-secondary').forEach(btn => {
        btn.addEventListener('click', () => track('cta-secondary-click', { href: btn.getAttribute('href') || '' }));
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        track('menu-toggle', { state: navMenu.classList.contains('active') ? 'open' : 'close' });
    });

    // Section views (via IntersectionObserver)
    document.querySelectorAll('section[id]').forEach(section => {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    track('section-view', { id: section.id });
                    sectionObserver.unobserve(section);
                }
            });
        }, { threshold: 0.3 });
        sectionObserver.observe(section);
    });

    // External link clicks (WhatsApp)
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', () => track('external-link-click', { href: link.getAttribute('href') || '' }));
    });
});