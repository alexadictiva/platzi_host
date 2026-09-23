# Platzi-host

Aplicación web para explorar alojamientos y buscar por ubicación, tipo de propiedad y cantidad de huéspedes. Cada alojamiento muestra una imagen, su ubicación, el precio por noche y el máximo de huéspedes.

## Cómo funciona

1. Al abrir la app, aparece un mensaje de carga mientras se prepara el listado de alojamientos.
2. Completá uno o varios campos del buscador: **Ciudad**, **Tipo** y **Huéspedes**.
3. Presioná **Buscar** o Enter para aplicar los filtros. Escribir en los campos no modifica los resultados hasta confirmar la búsqueda.
4. Revisá los alojamientos que cumplen todos los criterios. Si no hay coincidencias, la app muestra un mensaje.
5. Cualquiera de los botones **x** del buscador limpia todos los campos y restablece el listado completo.

### Criterios de búsqueda

| Campo | Comportamiento |
| --- | --- |
| Ciudad | Busca coincidencias parciales en la ubicación, que incluye ciudad y país. No distingue mayúsculas de minúsculas. |
| Tipo | Busca coincidencias parciales en el tipo de alojamiento, como Casa, Loft o Villa. No distingue mayúsculas de minúsculas. |
| Huéspedes | Busca alojamientos cuyo máximo de huéspedes sea exactamente igual al número ingresado. |

Los campos vacíos no restringen los resultados. Los filtros completados se aplican juntos.

Por ejemplo, buscar **Colombia** con **4** huéspedes muestra la cabaña de Medellín del catálogo actual. Dejar todos los campos vacíos y presionar Buscar muestra todos los alojamientos.

## Catálogo y alcance

El catálogo se almacena en `src/data/properties.ts`. Cada propiedad contiene:

- Identificador y título.
- Ubicación y tipo de alojamiento.
- Precio por noche y URL de la imagen.
- Máximo de huéspedes, guardado en el campo `huesped`.

La app funciona con datos locales y simula una carga inicial de tres segundos. Las imágenes se obtienen de Unsplash y requieren conexión a Internet. Incluye mensajes de carga, error y búsqueda sin resultados.

La versión actual permite consultar y filtrar alojamientos. No incluye reservas, pagos, cuentas de usuario ni conexión a un backend. Los enlaces del encabezado son elementos visuales y todavía no llevan a secciones independientes.

## Ejecutar en local

Necesitás Node.js y npm instalados y compatibles con la versión de Vite del proyecto.

Desde la carpeta del proyecto, instalá las dependencias:

```bash
npm install
```

Iniciá el servidor de desarrollo:

```bash
npm run dev
```

Abrí en el navegador la dirección que indique la terminal.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Genera la versión de producción en `dist/`. |
| `npm run preview` | Permite revisar localmente la versión generada con build. |
| `npm run lint` | Ejecuta ESLint con la configuración del proyecto. |

## Tecnologías

- React 19 para la interfaz y el manejo del estado.
- TypeScript para los componentes, datos y tipos.
- Vite para el desarrollo y la compilación.
- CSS para los estilos.
- ESLint para el análisis del código.

## Organización del proyecto

```text
src/
├── components/
│   ├── layout/        # Encabezado de la aplicación
│   ├── properties/    # Listado y tarjetas de alojamientos
│   └── ui/            # Presentación y formulario de búsqueda
├── data/              # Catálogo local de propiedades
├── types/             # Tipos de propiedades y props del buscador
├── utils/             # Función de filtrado
├── App.tsx            # Estado, carga inicial y conexión de componentes
├── index.css          # Estilos de la aplicación
└── main.tsx           # Punto de entrada
```
