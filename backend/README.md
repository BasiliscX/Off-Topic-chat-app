# backend - Off Topic Chat

## Descripción

La carpeta `backend` contiene toda la infraestructura del servidor de la aplicación, incluyendo la configuración del servidor, rutas de la API, middlewares y lógica de negocio. Este directorio es esencial para el manejo de todas las operaciones del lado del servidor.

## Estructura

### 1. **`src`**

Contiene el código fuente principal de la aplicación backend. Dentro de esta carpeta se encuentran todas las funcionalidades, middlewares, configuraciones de la base de datos y rutas.

- **Subcarpetas importantes**:
  - `features`: Funcionalidades específicas de la aplicación, organizadas por módulos.
  - `middleware`: Middlewares personalizados para tareas como validación y seguridad.
  - `prisma`: Configuración de Prisma ORM para la interacción con la base de datos.
  - `index.js`: Archivo de configuración de rutas de la API.

### 2. **`public`**

Contiene archivos estáticos que pueden ser servidos al cliente, como el archivo `index.html` y otros recursos públicos.

### 3. **`cluster.js`**

Archivo de configuración para ejecutar la aplicación en modo clúster, aprovechando múltiples núcleos de CPU para mejorar el rendimiento.

### 4. **`index.mjs`**

Archivo principal de entrada del servidor. Configura el servidor Express, aplica middlewares y establece las rutas de la API. También configura la gestión de errores y la seguridad básica.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express.js**: Framework web minimalista y flexible para Node.js, utilizado para crear el servidor y definir las rutas.
- **Prisma ORM**: Utilizado para la gestión de la base de datos y las consultas. Prisma proporciona una abstracción de base de datos y facilita el acceso a los datos.
- **MySQL**: Sistema de gestión de bases de datos utilizado para almacenar los datos de la aplicación.
- **Morgan**: Middleware para registrar las solicitudes HTTP para el desarrollo y la depuración.
- **Helmet**: Middleware de Express que ayuda a asegurar la aplicación estableciendo varios encabezados HTTP.
- **compression**: Middleware para comprimir las respuestas HTTP, mejorando la velocidad de la aplicación.
- **cors**: Middleware para habilitar CORS (Cross-Origin Resource Sharing), permitiendo que la API sea accesible desde diferentes dominios.
- **dotenv**: Utilizado para cargar variables de entorno desde un archivo `.env` para configurar el entorno de desarrollo.

## Uso

La carpeta `backend` es el núcleo de la lógica del servidor y la gestión de datos de la aplicación. Todas las solicitudes de clientes pasan por este servidor, donde se procesan, se aplican las reglas de negocio y se gestionan las interacciones con la base de datos.

## Buenas Prácticas

- Mantener una estructura clara y organizada, separando las funcionalidades en módulos dentro de `src/features`.
- Utilizar middlewares para tareas comunes como autenticación, validación de datos y limitación de tasa.
- Documentar todas las rutas y funcionalidades clave para facilitar el mantenimiento y la escalabilidad.
- Implementar pruebas unitarias y de integración para asegurar la calidad y fiabilidad del código.

Este README proporciona una visión general de la estructura y el propósito de los archivos y carpetas dentro del directorio `backend`.
