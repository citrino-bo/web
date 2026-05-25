document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', !isExpanded);
            hamburger.setAttribute('aria-label', isExpanded ? 'Abrir menú de navegación' : 'Cerrar menú de navegación');
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.setAttribute('aria-label', 'Abrir menú de navegación');
            });
        });
    }

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

    // ── Stats counter animation ──────────────────
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(el => {
                    const target = parseInt(el.getAttribute('data-target'), 10);
                    if (!target) return;
                    const duration = 2000;
                    const startTime = performance.now();
                    function update(currentTime) {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        const current = Math.round(target * eased);
                        el.textContent = current.toLocaleString('es-BO');
                        if (progress < 1) {
                            requestAnimationFrame(update);
                        }
                    }
                    requestAnimationFrame(update);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }

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
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            track('menu-toggle', { state: navMenu.classList.contains('active') ? 'open' : 'close' });
        });
    }

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

    // ── Citrino global namespace ──────────────────
    window.Citrino = window.Citrino || {};

});