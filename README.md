# Curso de React.js Básico — Clon estilo Platzi-host

Curso práctico de React.js donde construimos paso a paso la **home** de un clon sencillo inspirado en Platzi-host. La mayor parte del curso se desarrolla con **JavaScript** para enfocarnos en los fundamentos de React. Cerca del final, actualizamos el proyecto a **TypeScript**.

## Proyecto: Platzi-host

Una aplicación web con:
- Header principal
- Sección hero
- Barra de búsqueda
- Listado de propiedades con cards reutilizables
- Filtros simples por ciudad, tipo o texto
- Estados de carga, error y resultados vacíos

## Tecnologías

- React 19
- Vite
- JavaScript (clases 1–15)
- TypeScript (clases 16–18)

## Estructura del curso por ramas

Cada clase tiene su propia rama para que puedas seguir el progreso paso a paso:

| Rama | Clase | Tema |
|------|-------|------|
| `clase-01/intro` | 1 | Introducción al curso y al proyecto |
| `clase-02/setup-proyecto` | 2 | Configuración del proyecto con Vite |
| `clase-03/estructura-visual` | 3 | Estructura visual de la aplicación |
| `clase-04/primeros-componentes` | 4 | Primeros componentes en React |
| `clase-05/props` | 5 | Props en React |
| `clase-06/datos-mock` | 6 | Datos mock del proyecto |
| `clase-07/renderizado-listas` | 7 | Renderizado de listas con `.map()` |
| `clase-08/renderizado-condicional` | 8 | Renderizado condicional |
| `clase-09/usestate` | 9 | Estado local con `useState` |
| `clase-10/eventos` | 10 | Manejo de eventos |
| `clase-11/filtro-basico` | 11 | Filtro básico de propiedades |
| `clase-12/componentes-controlados` | 12 | Componentes controlados |
| `clase-13/useeffect` | 13 | Introducción a `useEffect` |
| `clase-14/loading-error` | 14 | Estados de carga y error |
| `clase-15/organizacion-refactor` | 15 | Organización de componentes y refactor |
| `clase-16/typescript-migracion` | 16 | Actualización del proyecto a TypeScript |
| `clase-17/typescript-tipado` | 17 | Tipando componentes, eventos, estados y funciones |
| `clase-18/cierre` | 18 | Cierre y entrega del proyecto |

## Cómo usar este repositorio

1. Clona el repositorio:
   ```bash
   git clone https://github.com/erasmoh/curso-react-basico.git
   cd curso-react-basico
   ```

2. Cambia a la rama de la clase que quieras revisar:
   ```bash
   git checkout clase-02/setup-proyecto
   ```

3. Instala dependencias (a partir de la clase 2):
   ```bash
   npm install
   ```

4. Levanta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Ruta del curso

### Primera parte: React con JavaScript
- Crear proyecto
- Componentes
- Props
- Listas
- Estado local
- Eventos
- useEffect
- Organización del proyecto

### Parte final: Actualización a TypeScript
- Cambiar extensiones
- Tipar datos
- Tipar props
- Tipar eventos
- Tipar estados

## Datos mock

El proyecto no tiene backend. Usamos datos mock para simular propiedades:

```javascript
const properties = [
  {
    id: 1,
    title: "Apartamento moderno en Santiago",
    location: "Santiago, Chile",
    price: 75,
    image: "/images/apartment.jpg",
    type: "Apartamento"
  }
];
```

## Licencia

Este proyecto es material educativo.