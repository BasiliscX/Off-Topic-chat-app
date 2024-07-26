# chat - Off Topic Chat

## Resumen

La carpeta de **Chat** en el proyecto **Off Topic Chat** contiene todos los archivos relacionados con la funcionalidad del chat. Aquí se encuentran los componentes y servicios necesarios para gestionar la interfaz de usuario y la lógica de negocio del chat, permitiendo a los usuarios enviar y recibir mensajes.

## Estructura

La carpeta de Chat incluye los siguientes archivos:

1. **Chat.js**: Componente principal que gestiona la visualización de mensajes, el envío de nuevos mensajes y la gestión de errores del servidor.
2. **chatService.js**: Servicio que proporciona funciones para interactuar con el backend, como obtener y enviar mensajes.
3. **MessageForm.js**: Componente de formulario utilizado para enviar mensajes.
4. **MessageList.js**: Componente que muestra la lista de mensajes del chat.
5. **ErrorDisplay.js**: Componente para mostrar mensajes de error cuando el servidor no está disponible.

## Descripción de los Componentes

### Chat.js

- **Función**: Es el componente principal que integra todos los demás componentes de la característica de chat. Gestiona el estado de los mensajes y maneja las solicitudes de obtención y envío de mensajes.
- **Principales Funcionalidades**:
  - Fetch de mensajes del servidor.
  - Gestión de errores del servidor.
  - Renderizado de la interfaz de usuario para el chat.

### chatService.js

- **Función**: Contiene funciones para la comunicación con el backend.
- **Principales Funcionalidades**:
  - **getMessages**: Realiza una solicitud GET para obtener mensajes del servidor.
  - **postMessage**: Realiza una solicitud POST para enviar un nuevo mensaje al servidor.

### MessageForm.js

- **Función**: Proporciona una interfaz para que los usuarios escriban y envíen nuevos mensajes.
- **Principales Funcionalidades**:
  - Campo de entrada para el mensaje.
  - Botón para enviar el mensaje.

### MessageList.js

- **Función**: Muestra la lista de mensajes recuperados del servidor.
- **Principales Funcionalidades**:
  - Renderizado de mensajes con su contenido y fecha de creación.

### ErrorDisplay.js

- **Función**: Muestra un mensaje de error si hay problemas de conexión con el servidor.
- **Principales Funcionalidades**:
  - Indica al usuario que el servidor no está disponible.

## Tecnologías Utilizadas

- **React**: Biblioteca principal para construir la interfaz de usuario.
- **Axios**: Para realizar solicitudes HTTP al backend.
- **Tailwind CSS**: Utilizado para estilos y diseño de la interfaz de usuario.
