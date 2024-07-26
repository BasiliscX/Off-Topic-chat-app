# frontend - Off Topic Chat

## Resumen

La carpeta **Frontend** en el proyecto **Off Topic Chat** contiene el código fuente del cliente de la aplicación, desarrollado con React. Esta aplicación permite a los usuarios participar en un chat en tiempo real, enviar mensajes y ver los mensajes de otros usuarios.

## Estructura de la Carpeta

La estructura de la carpeta Frontend incluye:

- **src/**: Contiene el código fuente de la aplicación.
  - **features/**: Contiene subcarpetas organizadas por funcionalidades específicas.
    - **chat/**: Incluye componentes y servicios relacionados con la funcionalidad de chat.
    - **errorHandling/**: Incluye componentes para la gestión de errores.
  - **App.js**: Componente raíz de la aplicación.
  - **index.js**: Punto de entrada principal para la aplicación React.
  - **index.css**: Archivo de estilos globales para la aplicación.

## Principales Componentes

### App.js

- **Función**: Actúa como el componente principal de la aplicación, encargándose de cargar las distintas características de la misma, incluida la funcionalidad de chat.
- **Principales Funcionalidades**:
  - Configuración de la estructura básica de la aplicación.
  - Uso de React.lazy y Suspense para cargar dinámicamente el componente de chat.

### src/features/chat/

- **Chat.js**: Componente principal que gestiona la visualización de mensajes y el envío de nuevos mensajes.
- **chatService.js**: Servicio para interactuar con el backend, proporcionando métodos para obtener y enviar mensajes.
- **MessageForm.js**: Componente de formulario para enviar mensajes.
- **MessageList.js**: Componente que muestra la lista de mensajes.
- **ErrorDisplay.js**: Componente que muestra un mensaje de error cuando el servidor no está disponible.

## Tecnologías Utilizadas

- **React**: Biblioteca principal para construir la interfaz de usuario.
- **Axios**: Utilizado para realizar solicitudes HTTP al backend.
- **Tailwind CSS**: Para el diseño y estilización de la interfaz de usuario.
- **React Router**: (Opcional) Para la navegación entre diferentes vistas si se implementa en el futuro.

## Configuración del Entorno

### Variables de Entorno

- **REACT_APP_API_URL**: URL del backend donde se realizan las solicitudes de API.

### Instalación y Ejecución

Para instalar las dependencias y ejecutar la aplicación en modo de desarrollo:

```bash
npm install
npm start
