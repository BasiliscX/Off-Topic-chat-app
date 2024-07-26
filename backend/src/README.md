# src - Off Topic Chat

## Descripción

La carpeta `src` es el directorio principal del código fuente de la aplicación. Contiene todas las funcionalidades, módulos y configuraciones necesarios para el funcionamiento del backend.

## Estructura

### 1. **`features`**

Contiene subcarpetas organizadas por funcionalidades de la aplicación. Cada subcarpeta dentro de `features` representa una funcionalidad específica y puede incluir archivos como controladores, servicios y rutas.

### 2. **`middleware`**

Contiene middlewares personalizados que se utilizan en la aplicación para tareas como validación, control de acceso, limitación de velocidad, entre otros.

### 3. **`prisma`**

Contiene la configuración de Prisma, el ORM utilizado para interactuar con la base de datos.

### 4. **`index.js`**

Archivo principal de rutas de la aplicación. Importa y organiza todas las rutas de las diferentes funcionalidades, proporcionando una estructura coherente para las rutas de la API.

### 5. **`tests`**

Contiene archivos de pruebas para verificar la funcionalidad del código. Estas pruebas pueden ser unitarias, de integración o de sistema.

## Uso

Toda la lógica del backend y la organización de la aplicación se encuentra dentro de la carpeta `src`. Cada subcarpeta y archivo está diseñado para seguir el principio de separación de preocupaciones, permitiendo una fácil escalabilidad y mantenimiento de la aplicación.

## Buenas Prácticas

- Mantener el código modular y organizado dentro de las subcarpetas correspondientes.
- Utilizar nombres de archivos y carpetas descriptivos para facilitar la navegación y comprensión del código.
- Documentar funciones y métodos críticos, especialmente aquellos que son utilizados por múltiples partes de la aplicación.
