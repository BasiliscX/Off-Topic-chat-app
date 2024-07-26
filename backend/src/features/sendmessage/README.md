# SendMessage - Off Topic Chat

Este módulo gestiona la funcionalidad de envío de mensajes en la aplicación **Off Topic Chat**.

## Estructura de la Carpeta

- `sendmessage.routes.js`: Define las rutas API relacionadas con la funcionalidad de enviar mensajes.
- `sendmessage.controller.js`: Controlador que maneja la lógica de negocio para el envío de mensajes.
- `sendmessage.service.js`: Servicio responsable de interactuar con la base de datos para almacenar mensajes.

## Detalles de los Archivos

### `sendmessage.routes.js`

Este archivo define las rutas relacionadas con la funcionalidad de envío de mensajes. Incluye el uso de middleware para la validación de datos y la limitación de tasa (rate limiting).

### `sendmessage.controller.js`

Este archivo contiene el controlador que gestiona la lógica de aplicación para el envío de mensajes. Aquí se valida el contenido del mensaje y se maneja la respuesta adecuada para el cliente.

### `sendmessage.service.js`

Este archivo contiene el servicio que interactúa con la base de datos a través de Prisma para crear y almacenar nuevos mensajes. Es el punto central para la lógica de acceso a datos relacionada con los mensajes.


## Endpoints

- **POST /api/message**: Endpoint para enviar un nuevo mensaje.
  - **Body**:
    - `content` (String): El contenido del mensaje a enviar. Este campo es obligatorio.

## Middleware

- **Validation Middleware**: Se asegura de que el contenido del mensaje esté presente y no esté vacío antes de proceder con la creación del mensaje.
- **Rate Limiter**: Limita el número de solicitudes que un usuario puede hacer en un período de tiempo determinado para prevenir abusos.

## Contribuir

Para contribuir a la funcionalidad de envío de mensajes:

1. Asegúrate de seguir las normas de estilo de código del proyecto.
2. Añade pruebas para cualquier nueva funcionalidad o cambios realizados.
3. Documenta claramente cualquier cambio o adición en este README.
