document.addEventListener('DOMContentLoaded', function() {
    // ── Navegación móvil ─────────────────────────
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            const abierto = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', String(!abierto));
            hamburger.setAttribute('aria-label', abierto ? 'Abrir menú de navegación' : 'Cerrar menú de navegación');
        });

        document.querySelectorAll('.nav-menu a').forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.setAttribute('aria-label', 'Abrir menú de navegación');
            });
        });
    }

    // ── Logo según el tema ───────────────────────
    const logoImg = document.querySelector('.logo-img');
    if (logoImg && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        logoImg.src = logoImg.src.replace('logo-claro', 'logo-oscuro');
    }

    // ── Sombra del header al scrollear ───────────
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(function() {
            const header = document.querySelector('.header');
            if (header) header.classList.toggle('scrolled', window.scrollY > 100);
            ticking = false;
        });
    }, { passive: true });

    // ── Aparición de bloques ─────────────────────
    const reveals = document.querySelectorAll('.scroll-reveal');
    if ('IntersectionObserver' in window) {
        const observadorReveal = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observadorReveal.unobserve(entry.target);
                }
            });
        }, { threshold: 0 });
        reveals.forEach(function(el) { observadorReveal.observe(el); });
    } else {
        reveals.forEach(function(el) { el.classList.add('visible'); });
    }

    // ── Analítica ────────────────────────────────
    function track(evento, datos) {
        if (window.umami && typeof window.umami.track === 'function') {
            window.umami.track(evento, datos);
        }
    }

    const pagina = (function() {
        const partes = location.pathname.split('/').filter(Boolean);
        if (partes.length === 0) return 'index';
        const ultimo = partes[partes.length - 1].replace(/\.html?$/, '');
        if (ultimo === 'index' && partes.length > 1) return partes[partes.length - 2];
        return ultimo || 'index';
    })();
    track('page-view', { page: pagina });

    // Un solo listener para todo lo que lleva data-evento. El nombre del evento es único por elemento (nav-inicio, cta-hero-servicios, social-linkedin...) porque Umami no segmenta custom events por propiedades: la única dimensión disponible es el nombre.
    document.addEventListener('click', function(e) {
        const el = e.target.closest && e.target.closest('[data-evento]');
        if (!el) return;
        track(el.getAttribute('data-evento'), { page: pagina });
    });

    document.querySelectorAll('section[id]').forEach(function(seccion) {
        const observadorSeccion = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    track('section-view', { page: pagina, id: seccion.id });
                    observadorSeccion.unobserve(seccion);
                }
            });
        }, { threshold: 0.4 });
        observadorSeccion.observe(seccion);
    });

    (function() {
        const umbrales = [25, 50, 75, 100];
        const disparado = {};
        let enCola = false;
        function revisar() {
            const alto = document.documentElement.scrollHeight - window.innerHeight;
            if (alto <= 0) return;
            const pct = Math.round((window.scrollY / alto) * 100);
            umbrales.forEach(function(t) {
                if (!disparado[t] && pct >= t) {
                    disparado[t] = true;
                    track('scroll-depth', { page: pagina, percent: t });
                }
            });
        }
        window.addEventListener('scroll', function() {
            if (enCola) return;
            enCola = true;
            requestAnimationFrame(function() { revisar(); enCola = false; });
        }, { passive: true });
    })();

    (function() {
        const inicio = Date.now();
        let informado = false;
        function informar() {
            if (informado) return;
            informado = true;
            track('engagement-time', { page: pagina, seconds: Math.round((Date.now() - inicio) / 1000) });
        }
        document.addEventListener('visibilitychange', function() {
            if (document.visibilityState === 'hidden') informar();
        });
        window.addEventListener('pagehide', informar);
    })();

    // ── Marquesina: pausa fuera de viewport ──────
    const marquesina = document.querySelector('.marquee-content');
    if (marquesina && 'IntersectionObserver' in window) {
        const observadorMarquesina = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                marquesina.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
            });
        }, { threshold: 0 });
        observadorMarquesina.observe(marquesina.parentElement);
    }

    // ── Formulario de contacto ──────────────────
    const leadForm = document.getElementById('lead-form');
    if (leadForm) {
        const leadSubject = document.getElementById('lead-subject');
        // El interés define el asunto y el ruteo interno. Ver docs/conversion-y-formularios.md.
        const ruteo = {
            'Quiero comprar una propiedad como inversión': { asunto: '[Inversión] Nuevo contacto desde la web', slug: 'inversion' },
            'Quiero una asesoría inmobiliaria personalizada': { asunto: '[Asesoría] Nuevo contacto desde la web', slug: 'asesoria' },
            'Necesito datos o monitoreo del mercado online': { asunto: '[Datos] Nuevo contacto desde la web', slug: 'datos' },
            'Quiero invertir como socio pasivo en un proyecto': { asunto: '[Socio pasivo] Nuevo contacto desde la web', slug: 'socio-pasivo' },
            'Quiero desarrollar mi terreno': { asunto: '[Desarrollo] Nuevo contacto desde la web', slug: 'desarrollo' },
            'Quiero vender una propiedad': { asunto: '[Vender] Nuevo contacto desde la web', slug: 'vender' }
        };

        let formularioIniciado = false;
        leadForm.addEventListener('focusin', function() {
            if (formularioIniciado) return;
            formularioIniciado = true;
            track('form-inicio', { page: pagina });
        });

        leadForm.querySelectorAll('input[name="interes"]').forEach(function(radio) {
            radio.addEventListener('change', function() {
                const destino = ruteo[radio.value];
                if (destino) track('interes-' + destino.slug, { page: pagina });
            });
        });

        leadForm.addEventListener('invalid', function() {
            track('form-invalido', { page: pagina });
        }, true);

        leadForm.addEventListener('submit', function() {
            const elegido = leadForm.querySelector('input[name="interes"]:checked');
            if (!elegido) return;
            const destino = ruteo[elegido.value];
            if (destino && leadSubject) leadSubject.value = destino.asunto;
            track('lead-submit', { page: pagina });
            if (destino) track('lead-' + destino.slug, { page: pagina });
        });

        // Email o WhatsApp: al menos uno.
        const leadEmail = document.getElementById('lead-email');
        const leadWhats = document.getElementById('lead-whatsapp');
        if (leadEmail && leadWhats) {
            const mensaje = 'Completá tu email o tu WhatsApp para que podamos contactarte.';
            const sincronizar = function() {
                const ok = leadEmail.value.trim() !== '' || leadWhats.value.trim() !== '';
                leadEmail.setCustomValidity(ok ? '' : mensaje);
            };
            leadEmail.addEventListener('input', sincronizar);
            leadWhats.addEventListener('input', sincronizar);
            sincronizar();
        }
    }

    // ── Panel de datos: mapa de densidad y gráficos ──
    const mapaEl = document.getElementById('mapa');
    if (mapaEl) inicializarPanel(mapaEl);

    function inicializarPanel(contenedor) {
        const CORTES = [10, 25, 75, 200];
        const RADIOS = [4, 6, 8, 11, 14];
        const ESCALA = [
            'rgba(0, 40, 87, 0.18)',
            'rgba(0, 40, 87, 0.35)',
            'rgba(0, 40, 87, 0.6)',
            'rgba(0, 64, 128, 0.85)',
            'rgba(238, 121, 0, 0.9)'
        ];
        const CENTRO = [-17.0, -64.4];
        const ZOOM = 6;
        let panel = null;
        let mapa = null;
        let capa = null;
        let lienzo = null;
        let tipo = 'todos';
        let operacion = 'todas';

        function tramo(n) {
            for (let i = 0; i < CORTES.length; i++) {
                if (n < CORTES[i]) return i;
            }
            return CORTES.length;
        }

        function color(n) {
            return ESCALA[tramo(n)];
        }

        // Radio en píxeles: a escala país una celda geográfica sería invisible,
        // así que la densidad se dibuja con tamaño constante en pantalla.
        function radio(n) {
            return RADIOS[tramo(n)];
        }

        function contar(celda) {
            if (tipo === 'todos' && operacion === 'todas') return celda.n;
            if (tipo !== 'todos' && operacion !== 'todas') {
                return Math.round(celda.n * (celda[tipo] / celda.n) * (celda[operacion] / celda.n));
            }
            return celda[tipo === 'todos' ? operacion : tipo];
        }

        function pintar() {
            if (!mapa || !panel) return;
            if (capa) mapa.removeLayer(capa);
            capa = L.layerGroup().addTo(mapa);

            let visibles = 0;
            panel.grilla.forEach(function(celda) {
                const n = contar(celda);
                if (n < panel.k) return;
                visibles++;
                const punto = L.circleMarker([celda.lat, celda.lng], {
                    radius: radio(n),
                    stroke: false,
                    fillColor: color(n),
                    fillOpacity: 0.8,
                    renderer: lienzo
                });
                punto.bindPopup('<strong>' + n.toLocaleString('es-BO') + '</strong> propiedades');
                punto.on('click', function() {
                    track('mapa-celda-click', { page: pagina });
                });
                capa.addLayer(punto);
            });

            const leyenda = document.getElementById('mapa-leyenda');
            if (leyenda) leyenda.hidden = visibles === 0;
        }

        function graficos(datos) {
            if (typeof Chart === 'undefined') {
                const fallback = document.getElementById('charts-fallback');
                if (fallback) fallback.hidden = false;
                return;
            }
            const estilo = getComputedStyle(document.documentElement);
            const varCss = function(nombre, alterno) {
                return estilo.getPropertyValue(nombre).trim() || alterno;
            };
            const barra = varCss('--chart-bar', 'rgba(0,40,87,0.8)');
            const barraAlt = varCss('--chart-bar-alt', 'rgba(0,64,128,0.8)');
            const acento = varCss('--chart-bar-accent', 'rgba(238,121,0,0.8)');
            const texto = varCss('--chart-text', '#4b5563');
            const grilla = varCss('--chart-grid', 'rgba(0,40,87,0.08)');
            Chart.defaults.font.family = "'DM Sans', sans-serif";
            Chart.defaults.color = texto;

            const base = {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(ctx) {
                                return ' ' + Number(ctx.parsed.y !== undefined ? ctx.parsed.y : ctx.parsed).toLocaleString('es-BO');
                            }
                        }
                    }
                },
                scales: {
                    x: { grid: { display: false }, ticks: { color: texto, maxRotation: 0, autoSkip: false } },
                    y: { beginAtZero: true, grid: { color: grilla }, ticks: { color: texto } }
                }
            };

            const ETIQUETAS = { casa: 'Casa', departamento: 'Depto', terreno: 'Terreno', venta: 'Venta', alquiler: 'Alquiler', anticretico: 'Anticrético' };

            const orden = function(obj) {
                return Object.keys(obj)
                    .filter(function(k) { return obj[k] > 0; })
                    .sort(function(a, b) { return obj[b] - obj[a]; });
            };

            const tipos = orden(datos.por_tipo);
            new Chart(document.getElementById('chart-tipos'), {
                type: 'bar',
                data: {
                    labels: tipos.map(function(k) { return ETIQUETAS[k] || k; }),
                    datasets: [{ data: tipos.map(function(k) { return datos.por_tipo[k]; }), backgroundColor: barra, borderRadius: 6, maxBarThickness: 64 }]
                },
                options: base
            });

            const operaciones = orden(datos.por_operacion);
            new Chart(document.getElementById('chart-operacion'), {
                type: 'bar',
                data: {
                    labels: operaciones.map(function(k) { return ETIQUETAS[k] || k; }),
                    datasets: [{ data: operaciones.map(function(k) { return datos.por_operacion[k]; }), backgroundColor: operaciones.map(function() { return barraAlt; }), borderRadius: 6, maxBarThickness: 64 }]
                },
                options: base
            });
        }

        function mostrarError() {
            const cargando = document.getElementById('mapa-loading');
            const fallback = document.getElementById('mapa-fallback');
            if (cargando) cargando.hidden = true;
            if (fallback) fallback.hidden = false;
            track('mapa-error', { page: pagina });
        }

        function arrancar() {
            if (typeof L === 'undefined') {
                mostrarError();
                return;
            }
            fetch('data/panel.json')
                .then(function(r) {
                    if (!r.ok) throw new Error('respuesta ' + r.status);
                    return r.json();
                })
                .then(function(datos) {
                    panel = datos;

                    mapa = L.map(contenedor, {
                        center: CENTRO,
                        zoom: ZOOM,
                        minZoom: 4,
                        maxZoom: 15,
                        scrollWheelZoom: false,
                        zoomControl: true
                    });
                    mapa.on('zoomend', function() {
                        const z = mapa.getZoom();
                        track('mapa-zoom-' + (z < 8 ? 'pais' : z < 11 ? 'departamento' : z < 13 ? 'ciudad' : 'detalle'), { page: pagina });
                    });

                    lienzo = L.canvas({ padding: 0.6 });
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                        maxZoom: 19
                    }).addTo(mapa);

                    const cargando = document.getElementById('mapa-loading');
                    if (cargando) cargando.hidden = true;

                    pintar();
                    graficos(panel);
                    track('mapa-cargado', { page: pagina, celdas: panel.celdas });
                })
                .catch(function() {
                    mostrarError();
                });

            document.querySelectorAll('.filtro-btn').forEach(function(btn) {
                btn.addEventListener('click', function() {
                    const esTipo = btn.hasAttribute('data-tipo');
                    const grupo = btn.parentElement;
                    grupo.querySelectorAll('.filtro-btn').forEach(function(otro) {
                        otro.setAttribute('aria-pressed', String(otro === btn));
                    });
                    if (esTipo) tipo = btn.getAttribute('data-tipo');
                    else operacion = btn.getAttribute('data-operacion');
                    pintar();
                    track(esTipo ? 'mapa-filtro-tipo-' + tipo : 'mapa-filtro-op-' + operacion, { page: pagina });
                });
            });
        }

        // El mapa carga recién cuando se acerca al viewport: el JSON no compite con el hero.
        if ('IntersectionObserver' in window) {
            const observadorMapa = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        observadorMapa.disconnect();
                        arrancar();
                    }
                });
            }, { rootMargin: '600px 0px' });
            observadorMapa.observe(contenedor.closest('.mapa'));
        } else {
            arrancar();
        }
    }

    window.Citrino = window.Citrino || {};
});
