document.addEventListener('DOMContentLoaded', function() {
    // ── Navegación móvil ─────────────────────────
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');
    // Sin :has() el header no ve el menú abierto: la clase de respaldo mantiene el estado sólido.
    const admiteHas = !!(window.CSS && CSS.supports && CSS.supports('selector(:has(*))'));

    if (hamburger && navMenu) {
        function fijarMenu(abierto) {
            navMenu.classList.toggle('active', abierto);
            hamburger.classList.toggle('active', abierto);
            hamburger.setAttribute('aria-expanded', String(abierto));
            hamburger.setAttribute('aria-label', abierto ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
            if (!admiteHas && header) header.classList.toggle('menu-abierto', abierto);
        }

        hamburger.addEventListener('click', function() {
            const abierto = hamburger.getAttribute('aria-expanded') !== 'true';
            fijarMenu(abierto);
            track('menu', { page: pagina, accion: abierto ? 'abre' : 'cierra' });
        });

        navMenu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                fijarMenu(false);
            });
        });

        // El menú desplegado tapa la página: Escape lo cierra y devuelve el foco al botón.
        document.addEventListener('keydown', function(e) {
            if (e.key !== 'Escape' || hamburger.getAttribute('aria-expanded') !== 'true') return;
            fijarMenu(false);
            hamburger.focus();
            track('menu', { page: pagina, accion: 'cierra' });
        });
    }

    // ── Estado del header: transparente arriba, sólido desde 100px ──
    function actualizarHeader() {
        if (header) header.classList.toggle('scrolled', window.scrollY > 100);
    }

    let ticking = false;
    window.addEventListener('scroll', function() {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(function() {
            actualizarHeader();
            ticking = false;
        });
    }, { passive: true });

    // La página puede abrir ya scrolleada: el estado inicial no espera al primer scroll.
    actualizarHeader();
    window.addEventListener('load', actualizarHeader);

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

    // ── La barra naranja se traza cuando el título entra ──
    const titulos = document.querySelectorAll('.section-title, .banda-titulo, .cta-final-title');
    if ('IntersectionObserver' in window) {
        const observadorTitulo = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('titulo-visible');
                    observadorTitulo.unobserve(entry.target);
                }
            });
        }, { threshold: 0.6 });
        titulos.forEach(function(t) { observadorTitulo.observe(t); });
    } else {
        titulos.forEach(function(t) { t.classList.add('titulo-visible'); });
    }

    // ── Panel de datos: un solo JSON para el censo y el mapa ──
    let panelPromesa = null;
    function cargarPanel() {
        if (!panelPromesa) {
            panelPromesa = fetch('data/panel.json').then(function(r) {
                if (!r.ok) throw new Error('respuesta ' + r.status);
                return r.json();
            });
        }
        return panelPromesa;
    }

    // ── El libro del censo se pinta desde el panel y entra cuando la banda es visible ──
    const bandaCenso = document.querySelector('.banda-censo');
    const libroCenso = bandaCenso ? bandaCenso.querySelector('.censo-datos') : null;
    const reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Reloj de los conteos: 900ms, un paso cada 33ms y el último deja el texto exacto de la cifra.
    function contarEnPasos(cifras) {
        const DURACION = 900;
        const inicio = performance.now();
        let ultimo = 0;
        function paso(ahora) {
            const t = ahora - inicio;
            if (t - ultimo < 33 && t < DURACION) {
                requestAnimationFrame(paso);
                return;
            }
            ultimo = t;
            const k = Math.min(1, t / DURACION);
            const suave = 1 - Math.pow(1 - k, 3);
            cifras.forEach(function(c) {
                c.el.textContent = k < 1 ? c.formato(Math.round(c.valor * suave)) : c.texto;
            });
            if (k < 1) requestAnimationFrame(paso);
        }
        requestAnimationFrame(paso);
    }

    function contarCifras(libro) {
        const cifras = [];
        libro.querySelectorAll('.censo-total-cifra, .censo-inmuebles').forEach(function(el) {
            const valor = parseInt(el.textContent.replace(/\D/g, ''), 10);
            if (isNaN(valor)) return;
            cifras.push({
                el: el,
                valor: valor,
                texto: el.textContent,
                formato: function(n) { return n.toLocaleString('es-BO'); }
            });
        });
        if (cifras.length === 0) return;

        // El rótulo del total arranca a la derecha de la cifra: sin ancho fijo se corre mientras el número cambia de largo.
        const total = libro.querySelector('.censo-total-cifra');
        if (total) total.style.minWidth = Math.ceil(total.getBoundingClientRect().width) + 'px';

        contarEnPasos(cifras);
    }

    function formatearCifra(n) {
        return Number(n).toLocaleString('es-BO');
    }

    function nombreCiudad(slug) {
        return String(slug).replace(/_/g, ' ').replace(/\b\w/g, function(letra) {
            return letra.toUpperCase();
        });
    }

    function porcentaje(inmuebles, maximo) {
        return (Math.round((inmuebles / maximo) * 1000) / 10) + '%';
    }

    function censoValido(censo) {
        return censo &&
            Number(censo.proyectos) > 0 &&
            Number(censo.inmuebles) > 0 &&
            Array.isArray(censo.ciudades) &&
            censo.ciudades.length > 0 &&
            censo.ciudades.every(function(ciudad) {
                return Number(ciudad.proyectos) > 0 && Number(ciudad.inmuebles) > 0;
            });
    }

    function pintarCenso(censo) {
        libroCenso.querySelector('.censo-total-cifra').textContent = formatearCifra(censo.inmuebles);

        const maximo = Math.max.apply(null, censo.ciudades.map(function(ciudad) {
            return Number(ciudad.inmuebles);
        }));
        const lista = libroCenso.querySelector('.censo-ciudades');
        lista.textContent = '';

        censo.ciudades.forEach(function(ciudad) {
            const fila = document.createElement('li');
            fila.className = 'censo-ciudad';
            fila.style.setProperty('--pct', porcentaje(Number(ciudad.inmuebles), maximo));

            const nombre = document.createElement('span');
            nombre.className = 'censo-nombre';
            nombre.textContent = nombreCiudad(ciudad.ciudad);

            const barra = document.createElement('span');
            barra.className = 'censo-barra';
            barra.appendChild(document.createElement('i'));

            const inmuebles = document.createElement('span');
            inmuebles.className = 'censo-inmuebles';
            inmuebles.textContent = formatearCifra(ciudad.inmuebles);

            const proyectos = document.createElement('span');
            proyectos.className = 'censo-proyectos';
            proyectos.textContent = formatearCifra(ciudad.proyectos) + (Number(ciudad.proyectos) === 1 ? ' proyecto' : ' proyectos');

            fila.appendChild(nombre);
            fila.appendChild(barra);
            fila.appendChild(inmuebles);
            fila.appendChild(proyectos);
            lista.appendChild(fila);
        });

        libroCenso.hidden = false;
    }

    function iniciarCenso() {
        if (!('IntersectionObserver' in window)) {
            libroCenso.classList.add('censo-visible');
            if (!reducirMovimiento.matches) contarCifras(libroCenso);
            return;
        }
        const observadorCenso = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('censo-visible');
                if (!reducirMovimiento.matches) contarCifras(entry.target);
                observadorCenso.unobserve(entry.target);
            });
        }, { threshold: 0.35 });
        observadorCenso.observe(libroCenso);
    }

    if (bandaCenso && libroCenso) {
        cargarPanel()
            .then(function(datos) {
                const censo = datos && datos.censo;
                if (!censoValido(censo)) throw new Error('panel sin censo');
                pintarCenso(censo);
                iniciarCenso();
            })
            .catch(function() {
                // Sin cifras, la banda conserva su texto y el bloque de datos no aparece.
                libroCenso.hidden = true;
            });
    }

    // ── Servicios: en móvil la lista entra escalonada, sin atarse al scroll ──
    const listasUnidad = document.querySelectorAll('.unidad-lista');
    if (listasUnidad.length) {
        if ('IntersectionObserver' in window) {
            const observadorLista = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('lista-visible');
                    observadorLista.unobserve(entry.target);
                });
            }, { threshold: 0.2 });
            listasUnidad.forEach(function(l) { observadorLista.observe(l); });
        } else {
            listasUnidad.forEach(function(l) { l.classList.add('lista-visible'); });
        }
    }

    // ── Inteligencia: la banda entra en cascada, sin atarse al scroll ──
    const listasBanda = document.querySelectorAll('.banda-lista');
    if (listasBanda.length) {
        if ('IntersectionObserver' in window) {
            const observadorBanda = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('banda-visible');
                    observadorBanda.unobserve(entry.target);
                });
            }, { threshold: 0.2 });
            listasBanda.forEach(function(l) { observadorBanda.observe(l); });
        } else {
            listasBanda.forEach(function(l) { l.classList.add('banda-visible'); });
        }
    }

    // ── Quiénes Somos: los logros entran en cascada y las cifras con signo se cuentan ──
    function contarLogros(lista) {
        const cifras = [];
        lista.querySelectorAll('.logro-cifra').forEach(function(el) {
            const texto = el.textContent.trim();
            // Sólo enteros: "3 casas/día" queda como está.
            if (!/^[+-]?\d[\d.]*$/.test(texto)) return;
            const valor = parseInt(texto.replace(/\D/g, ''), 10);
            if (isNaN(valor)) return;
            const signo = /^[+-]/.test(texto) ? texto[0] : '';
            cifras.push({
                el: el,
                valor: valor,
                texto: texto,
                formato: function(n) { return signo + n.toLocaleString('es-BO'); }
            });
        });
        if (cifras.length) contarEnPasos(cifras);
    }

    const listasLogros = document.querySelectorAll('.logros');
    if (listasLogros.length) {
        if ('IntersectionObserver' in window) {
            const observadorLogros = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('logros-visible');
                    if (!reducirMovimiento.matches) contarLogros(entry.target);
                    observadorLogros.unobserve(entry.target);
                });
            }, { threshold: 0.2 });
            listasLogros.forEach(function(l) { observadorLogros.observe(l); });
        } else {
            listasLogros.forEach(function(l) { l.classList.add('logros-visible'); });
        }
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

    if ('IntersectionObserver' in window) {
        document.querySelectorAll('section[id]').forEach(function(seccion) {
            const observadorSeccion = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        track('seccion', { page: pagina, id: seccion.id });
                        observadorSeccion.unobserve(seccion);
                    }
                });
            }, { threshold: 0.4 });
            observadorSeccion.observe(seccion);
        });
    }

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
                    track('scroll', { page: pagina, percent: t });
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

    // ── Marquesina: pausa manual y pausa fuera de viewport ──────
    const marquesina = document.querySelector('.marquee-content');
    const botonPausa = document.getElementById('marquesina-pausa');
    if (marquesina && botonPausa) {
        botonPausa.addEventListener('click', function() {
            const pausada = marquesina.classList.toggle('pausada');
            botonPausa.setAttribute('aria-pressed', String(pausada));
            botonPausa.textContent = pausada ? 'Reanudar movimiento' : 'Pausar movimiento';
            track('marquesina', { page: pagina, accion: pausada ? 'pausa' : 'reanuda' });
        });
    }
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
            track('form', { page: pagina, accion: 'inicio' });
        });

        leadForm.querySelectorAll('input[name="interes"]').forEach(function(radio) {
            radio.addEventListener('change', function() {
                const destino = ruteo[radio.value];
                if (destino) track('form', { page: pagina, accion: 'interes', interes: destino.slug });
            });
        });

        // Los mensajes nativos los pone el idioma del navegador, no el `lang` de la página: se reemplazan por los propios.
        const avisos = {
            interes: 'Elegí qué necesitás.',
            nombre: 'Escribí tu nombre.',
            mensaje: 'Contanos qué necesitás.',
            consent_privacidad: 'Necesitamos que aceptes la política de privacidad.',
            consent_contacto: 'Necesitamos que autorices el contacto.'
        };

        leadForm.addEventListener('invalid', function(e) {
            const campo = e.target;
            // En email y WhatsApp manda la regla "al menos uno", que ya dejó su mensaje.
            if (campo.name === 'email' || campo.name === 'whatsapp') return;
            campo.setCustomValidity(avisos[campo.name] || '');
        }, true);

        // Un mensaje propio no se borra solo: sin esto el campo queda inválido aunque se complete.
        ['input', 'change'].forEach(function(tipo) {
            leadForm.addEventListener(tipo, function(e) {
                const campo = e.target;
                // El grupo de radios comparte validez: se limpia entero o el resto mantiene el mensaje.
                if (campo.type === 'radio') {
                    leadForm.querySelectorAll('input[name="' + campo.name + '"]').forEach(function(radio) {
                        radio.setCustomValidity('');
                    });
                    return;
                }
                campo.setCustomValidity('');
            }, true);
        });

        // Un envío con varios campos vacíos emite un `invalid` por campo; se registra uno por intento.
        let ultimoInvalido = 0;
        leadForm.addEventListener('invalid', function() {
            const ahora = Date.now();
            if (ahora - ultimoInvalido < 800) return;
            ultimoInvalido = ahora;
            track('form', { page: pagina, accion: 'invalido' });
        }, true);

        leadForm.addEventListener('submit', function() {
            const elegido = leadForm.querySelector('input[name="interes"]:checked');
            if (!elegido) return;
            const destino = ruteo[elegido.value];
            if (destino && leadSubject) leadSubject.value = destino.asunto;
            track('form', { page: pagina, accion: 'envio', interes: destino ? destino.slug : '' });

            // El POST nativo navega fuera de la página: el botón se apaga para que no entren dos leads.
            const boton = document.getElementById('lead-submit');
            if (boton) {
                boton.disabled = true;
                boton.textContent = 'Enviando…';
            }
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

    // ── Panel de datos: mapa interactivo y gráficos ──
    const mapaEl = document.getElementById('mapa');
    if (mapaEl) inicializarPanel(mapaEl);

    function inicializarPanel(contenedor) {
        // Encuadre nacional: el país entra completo y las tres áreas metropolitanas quedan separadas.
        const PAIS = [[-22.95, -69.75], [-9.6, -57.4]];
        const MAX_ZOOM = 14;
        let panel = null;
        let mapa = null;
        let grupo = null;
        let lienzo = null;
        let puntoColor = '#002857';
        let tipo = 'todos';
        let operacion = 'todas';

        function contar(celda) {
            const n = Number(celda.n) || 0;
            if (!n) return 0;
            if (tipo === 'todos' && operacion === 'todas') return n;
            if (tipo !== 'todos' && operacion !== 'todas') {
                return Math.round(n * (Number(celda[tipo]) / n) * (Number(celda[operacion]) / n));
            }
            return Number(celda[tipo === 'todos' ? operacion : tipo]) || 0;
        }

        // El globo suma las propiedades de sus celdas: muestra inmuebles, no puntos en el mapa.
        function iconoCluster(cluster) {
            const total = cluster.getAllChildMarkers().reduce(function(suma, marcador) {
                return suma + (marcador.peso || 0);
            }, 0);
            const tamano = total < 500 ? 'chico' : total < 5000 ? 'medio' : 'grande';
            const lado = tamano === 'grande' ? 52 : tamano === 'medio' ? 42 : 34;
            return L.divIcon({
                html: '<div><span>' + total.toLocaleString('es-BO') + '</span></div>',
                className: 'mapa-cluster mapa-cluster--' + tamano,
                iconSize: [lado, lado]
            });
        }

        function aviso(titulo, texto) {
            const fallback = document.getElementById('mapa-fallback');
            const cargando = document.getElementById('mapa-loading');
            const tituloEl = document.getElementById('mapa-fallback-titulo');
            const textoEl = document.getElementById('mapa-fallback-texto');
            if (!fallback) return;
            if (cargando) cargando.hidden = true;
            if (!titulo) {
                fallback.hidden = true;
                return;
            }
            if (tituloEl) tituloEl.textContent = titulo;
            if (textoEl) textoEl.textContent = texto;
            fallback.hidden = false;
        }

        function apagarFiltros() {
            document.querySelectorAll('.filtro-btn').forEach(function(btn) {
                btn.disabled = true;
            });
        }

        function pintar() {
            if (!mapa || !panel) return;
            grupo.clearLayers();
            const marcadores = [];
            panel.grilla.forEach(function(celda) {
                const n = contar(celda);
                if (n < panel.k) return;
                const punto = L.circleMarker([celda.lat, celda.lng], {
                    radius: 5,
                    stroke: false,
                    fillColor: puntoColor,
                    fillOpacity: 0.55,
                    renderer: lienzo
                });
                punto.peso = n;
                marcadores.push(punto);
            });
            grupo.addLayers(marcadores);
            aviso(marcadores.length ? '' : 'Sin propiedades con ese filtro',
                'Probá otra combinación de tipo y operación.');
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
                    x: { grid: { display: false }, ticks: { color: texto, maxRotation: 45, autoSkip: true } },
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
            const chartsFallback = document.getElementById('charts-fallback');
            if (cargando) cargando.hidden = true;
            aviso('El mapa no está disponible en este momento',
                'Estamos trabajando para restablecerlo.');
            if (chartsFallback) chartsFallback.hidden = false;
            apagarFiltros();
            track('mapa', { page: pagina, accion: 'error' });
        }

        function arrancar() {
            cargarPanel()
                .then(function(datos) {
                    panel = datos;
                    graficos(panel);

                    if (typeof L === 'undefined' || typeof L.markerClusterGroup === 'undefined') {
                        aviso('El mapa interactivo no está disponible en este momento',
                            'Estamos trabajando para restablecerlo.');
                        apagarFiltros();
                        return;
                    }

                    puntoColor = getComputedStyle(document.documentElement).getPropertyValue('--mapa-punto').trim() || '#002857';

                    mapa = L.map(contenedor, {
                        center: [-16.5, -64.0],
                        zoom: 5,
                        minZoom: 4,
                        maxZoom: MAX_ZOOM,
                        zoomSnap: 0.25,
                        scrollWheelZoom: false,
                        zoomControl: true
                    });
                    mapa.on('zoomend', function() {
                        const z = mapa.getZoom();
                        track('mapa', { page: pagina, accion: 'zoom', nivel: z < 8 ? 'pais' : z < 11 ? 'departamento' : z < 13 ? 'ciudad' : 'detalle' });
                    });

                    lienzo = L.canvas({ padding: 0.6 });
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                        maxZoom: 19
                    }).addTo(mapa);
                    mapa.fitBounds(PAIS, { padding: [12, 12] });

                    grupo = L.markerClusterGroup({
                        maxClusterRadius: 40,
                        spiderfyOnMaxZoom: false,
                        showCoverageOnHover: false,
                        zoomToBoundsOnClick: true,
                        disableClusteringAtZoom: MAX_ZOOM + 1,
                        iconCreateFunction: iconoCluster
                    });
                    grupo.on('clusterclick', function() {
                        track('mapa', { page: pagina, accion: 'cluster', zoom: mapa.getZoom() });
                    });
                    mapa.addLayer(grupo);

                    const cargando = document.getElementById('mapa-loading');
                    if (cargando) cargando.hidden = true;

                    pintar();
                    track('mapa', { page: pagina, accion: 'carga', celdas: panel.celdas });
                })
                .catch(function() {
                    mostrarError();
                });

            document.querySelectorAll('.filtro-btn').forEach(function(btn) {
                btn.addEventListener('click', function() {
                    const esTipo = btn.hasAttribute('data-tipo');
                    const grupoBotones = btn.parentElement;
                    grupoBotones.querySelectorAll('.filtro-btn').forEach(function(otro) {
                        otro.setAttribute('aria-pressed', String(otro === btn));
                    });
                    if (esTipo) tipo = btn.getAttribute('data-tipo');
                    else operacion = btn.getAttribute('data-operacion');
                    pintar();
                    track('mapa', { page: pagina, accion: 'filtro', tipo: tipo, operacion: operacion });
                });
            });
        }

        // El mapa arranca cuando se acerca al viewport; el censo ya pidió el JSON, así que comparten una sola descarga.
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
