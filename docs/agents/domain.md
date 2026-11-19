# Docs de dominio

Cómo consumen las skills de ingeniería la documentación de dominio de este repo al explorar el código.

## Antes de explorar, leé

- **`GLOSSARY.md`** en la raíz del repo, o
- **`GLOSSARY-MAP.md`** en la raíz si existe: apunta a un `GLOSSARY.md` por contexto. Leé cada uno que toque el tema.
- **`docs/adr/`**: leé los ADR que toquen el área donde vas a trabajar. En repos multi-contexto, revisá también `src/<contexto>/docs/adr/` por decisiones acotadas al contexto.

Si esos archivos no existen, **seguí sin avisar**. No señales su ausencia ni propongas crearlos de entrada. La skill `/domain-modeling` (se llega por `/grill-with-docs` y `/improve-codebase-architecture`) los crea cuando un término o una decisión se resuelve de verdad.

## Estructura de archivos

Este repo es de un solo contexto:

```
/
├── GLOSSARY.md
├── docs/adr/
│   ├── 0001-<tema>.md
│   └── 0002-<tema>.md
└── *.html
```

Un repo multi-contexto se reconoce por la presencia de `GLOSSARY-MAP.md` en la raíz, y reparte un `GLOSSARY.md` y un `docs/adr/` por contexto bajo `src/<contexto>/`.

## Usá el vocabulario del glosario

Cuando tu salida nombre un concepto de dominio (en el título de un issue, una propuesta de refactor, una hipótesis, el nombre de un test), usá el término tal como lo define `GLOSSARY.md`. No derives a sinónimos que el glosario evita.

Si el concepto que necesitás no está en el glosario todavía, eso es una señal: o estás inventando lenguaje que el proyecto no usa (reconsiderá) o hay un hueco real (anotalo para `/domain-modeling`).

## Marcá los conflictos con ADR

Si tu salida contradice un ADR existente, exponelo en vez de pisarlo en silencio:

> _Contradice el ADR-0007 (panel agregado sin base individual), pero vale reabrirlo porque…_
