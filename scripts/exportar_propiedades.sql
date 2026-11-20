-- Base de propiedades que alimenta data/panel.json. Corre dentro del contenedor de citrino-central y escribe el JSON que consume scripts/agregar_panel.py. El resultado tiene una entrada por inmueble con lat/lng, tipo y operación; nunca se commitea ni se sirve.
--
-- El bloque `censo` corta por el último relevamiento de cada proyecto: para cada (ciudad_origen, nombre_normalizado) de oro.relevamiento_mensual toma la fila con mayor fecha.
--
-- Uso:
--   docker exec -i citrino-central-staging psql -U citrino -d citrino_central -At -f - < scripts/exportar_propiedades.sql > data/propiedades.json

with p as (
  select st_y(geom) as lat, st_x(geom) as lng,
         tipo_propiedad as tipo_inmueble, operacion as tipo_operacion
  from oro.anuncios
  where estado = 'activo'
    and geom is not null
    and tipo_propiedad in ('casa', 'departamento', 'terreno')
    and operacion in ('venta', 'alquiler', 'anticretico')
),
proyecto as (
  select r.ciudad_origen, r.nombre_normalizado, max(r.fecha) as fecha
  from oro.relevamiento_mensual r group by 1, 2
),
ultimo as (
  select r.ciudad_origen, r.inmuebles_totales
  from oro.relevamiento_mensual r
  join proyecto x on x.ciudad_origen = r.ciudad_origen
   and x.nombre_normalizado = r.nombre_normalizado
   and x.fecha = r.fecha
),
por_ciudad as (
  select ciudad_origen, count(*) as proyectos, sum(inmuebles_totales) as inmuebles
  from ultimo group by 1
)
select json_build_object(
  'generado', current_date,
  'fuente', 'citrino-central oro.anuncios',
  'total', (select count(*) from p),
  'por_tipo', (select json_object_agg(tipo_inmueble, n) from (select tipo_inmueble, count(*) n from p group by 1) t),
  'por_operacion', (select json_object_agg(tipo_operacion, n) from (select tipo_operacion, count(*) n from p group by 1) o),
  'censo', json_build_object(
    'corte', 'último relevamiento por proyecto',
    'fecha_corte', (select max(fecha) from proyecto),
    'proyectos', (select count(*) from ultimo),
    'inmuebles', (select sum(inmuebles_totales) from ultimo),
    'ciudades', (select json_agg(json_build_object('ciudad', ciudad_origen, 'proyectos', proyectos, 'inmuebles', inmuebles) order by inmuebles desc) from por_ciudad)
  ),
  'propiedades', (select json_agg(json_build_object('lat', lat, 'lng', lng, 'tipo_inmueble', tipo_inmueble, 'tipo_operacion', tipo_operacion)) from p)
);
