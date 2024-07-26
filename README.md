# Off-Topic-chat-app

## Descripción General

**Off-Topic-chat-app** es una aplicación de chat en tiempo real, diseñada para permitir la interacción entre usuarios a través de mensajes de texto. La aplicación está dividida en dos partes principales: el frontend y el backend. El frontend está desarrollado con React, mientras que el backend utiliza Node.js con Express y Prisma para la gestión de la base de datos.

## Estructura del Proyecto

El proyecto está organizado en varias carpetas, cada una de las cuales contiene componentes específicos para su funcionalidad:

- **backend/**: Contiene el código fuente del servidor y las API.
  - **src/**: Código fuente del backend.
    - **features/**: Características específicas como envío y obtención de mensajes.
    - **middleware/**: Middleware para validación, limitación de velocidad, etc.
    - **prisma/**: Cliente Prisma para la interacción con la base de datos.
  - **public/**: Archivos públicos servidos por el backend.
  - **cluster.js**: Configuración de clúster para Node.js.
  - **index.mjs**: Punto de entrada principal del backend.

- **frontend/**: Contiene el código fuente del cliente.
  - **src/**: Código fuente del frontend.
    - **features/**: Características específicas como chat y manejo de errores.
  - **public/**: Archivos públicos como imágenes y el archivo HTML principal.

## Tecnologías Utilizadas

### Backend

- **Node.js**: Plataforma de servidor para ejecutar JavaScript en el servidor.
- **Express**: Framework para la creación de APIs RESTful.
- **Prisma**: ORM para interactuar con la base de datos.
- **MySQL**: Sistema de gestión de bases de datos relacional.
- **apicache**: Middleware para caching de respuestas HTTP.
- **express-rate-limit**: Middleware para limitar la tasa de solicitudes.
- **Helmet**: Middleware de seguridad para proteger la aplicación de algunas vulnerabilidades.

### Frontend

- **React**: Biblioteca para la construcción de interfaces de usuario.
- **Axios**: Cliente HTTP para hacer solicitudes al backend.
- **Tailwind CSS**: Framework CSS para diseño y estilización.

## Contribución

Si deseas contribuir a **Off-Topic-chat-app**, sigue estos pasos:

1. Haz un fork del repositorio y clónalo en tu máquina local.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y pruébalos.
4. Haz un commit de tus cambios (`git commit -am 'Agregar nueva funcionalidad'`).
5. Empuja los cambios a la rama (`git push origin feature/nueva-funcionalidad`).
6. Abre un pull request en GitHub.

## Agradecimientos

Este proyecto utiliza tecnologías de código abierto y agradece a la comunidad de desarrolladores por su apoyo y contribuciones.

## Contacto

Para cualquier pregunta o sugerencia, no dudes en contactarme a través de mi [perfil de GitHub](https://github.com/BasiliscX).
