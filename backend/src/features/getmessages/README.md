# GetMessages - Off Topic Chat

Este módulo gestiona la funcionalidad de obtención de mensajes en la aplicación **Off Topic Chat**.

## Estructura de la Carpeta

- `getmessages.routes.js`: Define las rutas API relacionadas con la funcionalidad de obtener mensajes.
- `getmessages.controller.js`: Controlador que maneja la lógica de negocio para obtener mensajes.
- `getmessages.service.js`: Servicio responsable de interactuar con la base de datos para recuperar los mensajes.

## Detalles de los Archivos

### `getmessages.routes.js`

Este archivo define las rutas relacionadas con la funcionalidad de obtener mensajes. Incluye la configuración para el uso de un middleware de caché.

### `getmessages.controller.js`

Este archivo contiene el controlador que gestiona la lógica de aplicación para la obtención de mensajes. Se encarga de manejar las solicitudes de los clientes para recuperar los mensajes almacenados.

### `getmessages.service.js`

Este archivo contiene el servicio que interactúa con la base de datos a través de Prisma para recuperar los mensajes. Este servicio es responsable de realizar las consultas a la base de datos y devolver los resultados al controlador.

## Endpoints

- **GET /api/messages**: Endpoint para obtener una lista de mensajes.
  - **Respuesta**:
    - Una lista de objetos, cada uno representando un mensaje con los campos `content` y `createdAt`.

## Middleware

- **Cache Middleware**: Se utiliza para mejorar el rendimiento almacenando en caché las respuestas de las solicitudes GET a la lista de mensajes.

## Contribuir

Para contribuir a la funcionalidad de obtención de mensajes:

1. Sigue las normas de estilo de código del proyecto.
2. Añade pruebas para cualquier nueva funcionalidad o cambios realizados.
3. Documenta claramente cualquier cambio o adición en este README.
