# 4frame

Esta plantilla te ayudará a comenzar a desarrollar con Vue 3 en Vite.

## Configuración de IDE recomendada

[VSCode](https://code.visualstudio.com/) +
[Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (y
desactivar Vetur).

## Soporte de tipos para importaciones `.vue` en TS

TypeScript no puede manejar la información de tipos para importaciones `.vue`
por defecto, por lo que reemplazamos el CLI `tsc` con `vue-tsc` para la
comprobación de tipos. En los editores, necesitamos
[Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) para que
el servicio de lenguaje TypeScript reconozca los tipos `.vue`.

## Personalizar configuración

Ver [Referencia de configuración de Vite](https://vite.dev/config/).

## Configuración del proyecto

```sh
npm install
```

### Compilar y recarga en caliente para desarrollo

```sh
npm run dev
```

### Verificar tipos, compilar y minificar para producción

```sh
npm run build
```

### Lint con [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Variables de entorno

Es necesario crear un archivo `.env` en la raíz del proyecto con el siguiente
formato:

```
VITE_API_KEY=
VITE_BASE_URL="https://api.themoviedb.org/3"
```

Debes obtener tu propia API_KEY de
[The Movie Database](https://www.themoviedb.org/) y agregarla al archivo `.env`.
