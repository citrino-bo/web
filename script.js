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

    // Page context
    var page = (function() {
        var path = location.pathname.split('/').pop();
        if (!path || path === '' || path === '/') return 'index';
        return path.replace('.html', '');
    })();
    track('page-view', { page: page });

    // CTA clicks
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', () => track('cta-primary-click', { page: page, href: btn.getAttribute('href') || '' }));
    });
    document.querySelectorAll('.btn-secondary').forEach(btn => {
        btn.addEventListener('click', () => track('cta-secondary-click', { page: page, href: btn.getAttribute('href') || '' }));
    });
    document.querySelectorAll('.btn-julia').forEach(btn => {
        btn.addEventListener('click', () => track('cta-julia-click', { page: page, href: btn.getAttribute('href') || '' }));
    });

    // Platform card CTAs (index.html)
    document.querySelectorAll('.platform-card .btn-julia').forEach(btn => {
        btn.addEventListener('click', () => track('platform-cta', { product: 'jul-ia', action: 'whatsapp' }));
    });
    document.querySelectorAll('.platform-card .btn-primary').forEach(btn => {
        btn.addEventListener('click', () => track('platform-cta', { product: 'base-de-datos', action: 'explore' }));
    });
    document.querySelectorAll('.platform-card-link').forEach(link => {
        link.addEventListener('click', () => track('platform-cta', {
            product: link.getAttribute('href').indexOf('jul-ia') !== -1 ? 'jul-ia' : 'base-de-datos',
            action: 'learn-more'
        }));
    });

    // Jul-IA use-case conversions (jul-ia.html)
    if (page === 'jul-ia') {
        var useCaseBtns = document.querySelectorAll('.use-case-card .btn-julia');
        var useCaseLabels = ['portafolio', 'alquiler'];
        useCaseBtns.forEach(function(btn, i) {
            btn.addEventListener('click', function() {
                track('julia-use-case', { use_case: useCaseLabels[i] || 'unknown' });
            });
        });
    }

    // Cross-page navigation
    document.querySelectorAll('a[href*="base-de-datos"], a[href*="jul-ia"]').forEach(function(link) {
        var href = link.getAttribute('href');
        if (href && href.endsWith('.html') && !link.hasAttribute('data-tracked-cross')) {
            link.setAttribute('data-tracked-cross', '1');
            link.addEventListener('click', function() {
                track('cross-page-nav', { from: page, to: href.replace('.html', '') });
            });
        }
    });

    // Base de datos map interaction (base-de-datos.html)
    if (page === 'base-de-datos') {
        document.querySelectorAll('.db-filter-btn, .db-toggle-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                track('db-filter', { type: btn.classList.contains('db-filter-btn') ? 'tipo' : 'operacion', value: btn.getAttribute('data-filter') || btn.getAttribute('data-operation') });
            });
        });
    }

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
                    track('section-view', { page: page, id: section.id });
                    sectionObserver.unobserve(section);
                }
            });
        }, { threshold: 0.3 });
        sectionObserver.observe(section);
    });

    // External link clicks (WhatsApp)
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', () => track('external-link-click', { page: page, href: link.getAttribute('href') || '' }));
    });

    // ── Citrino global namespace ──────────────────
    window.Citrino = window.Citrino || {};

});