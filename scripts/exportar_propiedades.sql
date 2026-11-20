-- Base de propiedades que alimenta data/panel.json. Corre dentro del contenedor de citrino-central y escribe el JSON que consume scripts/agregar_panel.py. El resultado tiene una entrada por inmueble con lat/lng, tipo y operación; nunca se commitea ni se sirve.
--
-- Uso:
--   docker exec -i citrino-central-staging psql -U citrino -d citrino_central -At -f - \
--     < scripts/exportar_propiedades.sql > data/propiedades.json

with p as (
  select st_y(geom) as lat, st_x(geom) as lng,
         tipo_propiedad as tipo_inmueble, operacion as tipo_operacion
  from oro.anuncios
  where estado = 'activo'
    and geom is not null
    and tipo_propiedad in ('casa', 'departamento', 'terreno')
    and operacion in ('venta', 'alquiler', 'anticretico')
)
select json_build_object(
  'generado', current_date,
  'fuente', 'citrino-central oro.anuncios',
  'total', (select count(*) from p),
  'por_tipo', (select json_object_agg(tipo_inmueble, n) from (select tipo_inmueble, count(*) n from p group by 1) t),
  'por_operacion', (select json_object_agg(tipo_operacion, n) from (select tipo_operacion, count(*) n from p group by 1) o),
  'propiedades', (select json_agg(json_build_object('lat', lat, 'lng', lng, 'tipo_inmueble', tipo_inmueble, 'tipo_operacion', tipo_operacion)) from p)
);
