# EasyKeys Client

## Español

EasyKeys Client es un frontend e-commerce multi-page construido con HTML, CSS y vanilla JavaScript. El proyecto presenta una tienda de teclados con navegación de productos, vista de detalle, manejo de carrito y una sección admin sencilla para crear y editar productos.

La aplicación consume datos desde Airtable directamente en el navegador y usa local storage para mantener la cantidad de productos mostrada en el carrito.

## Descripción del proyecto

Este proyecto está estructurado como una aplicación frontend estática.

- La landing page destaca teclados principales.
- La página de teclados lista todos los productos y permite filtrar y buscar.
- La página de detalle muestra la información de un teclado específico.
- La página del carrito muestra los productos seleccionados y el resumen de compra.
- La página admin ofrece una gestión básica de productos contra la API respaldada por Airtable.
- Elementos compartidos de la UI como navbar, footer, toast y product cards están implementados como componentes reutilizables.

## Tecnologías

- HTML5
- CSS3
- Vanilla JavaScript con ES modules
- Web Components vía `customElements`
- Airtable REST API
- Local Storage para un estado liviano del carrito
- Docker
- Docker Compose
- Node.js con `http-server` para servir archivos estáticos dentro del container

## Cómo correrlo con Docker

### Requisitos previos

- Docker instalado localmente
- Docker Compose disponible a través de `docker compose`

### Clonar el repositorio

```bash
git clone https://github.com/RafaelOviedo/easykeys-client.git
cd easykeys-client
```

### Levantar el proyecto

Desde la raíz del proyecto, ejecuta:

```bash
docker compose up --build
```

Luego abre:

```text
http://localhost:3000
```

### Detener el proyecto

```bash
docker compose down
```

## Docker setup explicado

Este proyecto usa un container setup muy pequeño porque la aplicación es completamente estática.

### Dockerfile

El `Dockerfile` usa una imagen Alpine de Node.js e instala `http-server` de forma global.

- `WORKDIR /app` define el working directory dentro del container.
- `COPY . .` copia los archivos del proyecto dentro del container.
- `EXPOSE 3000` documenta el port usado por la aplicación.
- `CMD ["http-server", ".", "-p", "3000", "-a", "0.0.0.0"]` inicia un static file server desde la raíz del proyecto.

Como el server corre desde la raíz del repositorio, archivos como `index.html`, `assets/` y las páginas anidadas dentro de `src/` quedan disponibles respetando sus relative paths actuales.

### compose.yml

El archivo de Compose define un único service llamado `client`.

```yaml
name: easykeys

services:
  client:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
```

Esto significa:

- `name: easykeys` define el nombre del proyecto en Compose.
- `client` es el frontend service containerizado.
- `context: .` le indica a Docker que use el directorio actual del proyecto como build context.
- `dockerfile: Dockerfile` le indica a Compose qué Dockerfile usar para construir la imagen.
- `3000:3000` mapea el port `3000` de tu máquina al port `3000` dentro del container.

En la práctica, el flujo es este:

1. `docker compose up --build` lee `compose.yml`.
2. Docker construye una imagen desde la carpeta actual del proyecto.
3. La imagen inicia un static server basado en Node.
4. El sitio queda disponible en `http://localhost:3000`.

----------------------------------------------------------------------------

## English

EasyKeys Client is a multi-page e-commerce frontend built with HTML, CSS, and vanilla JavaScript. The project presents a keyboard storefront with product browsing, product details, cart management, and a simple admin area for creating and editing products.

The application consumes data from Airtable through the browser and uses local storage to keep track of the cart quantity shown in the UI.

## Project Overview

This project is structured as a static frontend application.

- The landing page highlights featured keyboards.
- The keyboards page lists all products and supports filtering and search.
- The product details page displays a single keyboard.
- The cart page shows selected items and order totals.
- The admin page provides basic product management against the Airtable-backed API.
- Shared UI elements such as the navbar, footer, toast, and product cards are implemented as reusable components.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript with ES modules
- Web Components via `customElements`
- Airtable REST API
- Local Storage for lightweight cart state
- Docker
- Docker Compose
- Node.js with `http-server` for static file serving inside the container

## Running with Docker

### Prerequisites

- Docker installed locally
- Docker Compose available through `docker compose`

### Clone the Repository

```bash
git clone https://github.com/RafaelOviedo/easykeys-client.git
cd easykeys-client
```

### Start the Project

From the project root, run:

```bash
docker compose up --build
```

Then open:

```text
http://localhost:3000
```

### Stop the Project

```bash
docker compose down
```

## Docker Setup Explained

This project uses a very small container setup because the application is purely static.

### Dockerfile

The `Dockerfile` uses a Node.js Alpine image and installs `http-server` globally.

- `WORKDIR /app` sets the working directory inside the container.
- `COPY . .` copies the project files into the container.
- `EXPOSE 3000` documents the port used by the app.
- `CMD ["http-server", ".", "-p", "3000", "-a", "0.0.0.0"]` starts a static file server from the project root.

Because the server runs from the root of the repository, files like `index.html`, `assets/`, and the nested pages under `src/` are all available with their existing relative paths.

### compose.yml

The Compose file defines a single service named `client`.

```yaml
name: easykeys

services:
  client:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
```

What this means:

- `name: easykeys` sets the Compose project name.
- `client` is the containerized frontend service.
- `context: .` tells Docker to use the current project directory as the build context.
- `dockerfile: Dockerfile` tells Compose which Dockerfile to build from.
- `3000:3000` maps port `3000` on your machine to port `3000` inside the container.

In practice, the flow is:

1. `docker compose up --build` reads `compose.yml`.
2. Docker builds an image from the current project folder.
3. The image starts a Node-based static server.
4. The site becomes available at `http://localhost:3000`.

