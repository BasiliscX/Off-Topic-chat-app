# README

---

## **Off Topic Backend**

Este proyecto es el backend para la aplicación de chat "Off Topic". La aplicación permite a los usuarios interactuar en un chat público sin necesidad de registro, y está diseñada para manejar mensajes de forma segura y eficiente.

### **Tecnologías Utilizadas**

- **Node.js**: Entorno de ejecución para JavaScript en el lado del servidor.
- **Express.js**: Framework web para Node.js que facilita la creación de aplicaciones web y APIs.
- **Prisma**: ORM (Object-Relational Mapping) que simplifica las operaciones con bases de datos SQL.
- **MySQL**: Sistema de gestión de bases de datos relacional utilizado para almacenar mensajes.
- **Morgan**: Middleware para registro de solicitudes HTTP, útil para el monitoreo y depuración.
- **Helmet**: Middleware para ayudar a asegurar las aplicaciones Express configurando varios encabezados HTTP.
- **Sinon**: Librería para crear stubs, mocks y spies en pruebas.
- **Mocha**: Framework de pruebas para Node.js.
- **Chai**: Librería de aserciones para usar con Mocha.

### **Rutas de la API**

#### **Rutas de Mensajes**

1. **Obtener Todos los Mensajes**
   - **URL**: `/api/messages`
   - **Método**: `GET`
   - **Descripción**: Obtiene una lista de todos los mensajes ordenados por la fecha de creación en orden descendente.
   - **Respuesta**:
     - `200 OK`: Lista de mensajes con campos `content` y `createdAt`.

2. **Crear un Nuevo Mensaje**
   - **URL**: `/api/messages`
   - **Método**: `POST`
   - **Descripción**: Crea un nuevo mensaje con el contenido proporcionado.
   - **Cuerpo de la Solicitud**:
     - `content`: Texto del mensaje.
   - **Respuesta**:
     - `201 Created`: El mensaje ha sido creado exitosamente con los detalles del mensaje creado.
     - `400 Bad Request`: Si el contenido está vacío o no se proporciona.

### **Estructura del Proyecto**

- **`src/`**: Contiene el código fuente del proyecto.
  - **`features/`**: Módulos de características específicas como `sendmessage` y `getmessages`.
    - **`sendmessage/`**:
      - **`sendmessage.routes.js`**: Define las rutas relacionadas con la creación de mensajes.
      - **`sendmessage.controller.js`**: Controla la lógica para la creación de mensajes.
      - **`sendmessage.service.js`**: Lógica de negocio y comunicación con la base de datos para la creación de mensajes.
    - **`getmessages/`**:
      - **`getmessages.routes.js`**: Define las rutas relacionadas con la obtención de mensajes.
      - **`getmessages.controller.js`**: Controla la lógica para la obtención de mensajes.
      - **`getmessages.service.js`**: Lógica de negocio y comunicación con la base de datos para la obtención de mensajes.
  - **`middleware/`**: Contiene middlewares personalizados como el manejo de errores y la seguridad.
  - **`prisma/`**: Configuración del cliente de Prisma.
  - **`index.mjs`**: Punto de entrada principal de la aplicación.

### **Consideraciones de Seguridad**

- **Validación de Entradas**: Se asegura de que todos los datos de entrada sean validados y sanitizados adecuadamente para prevenir inyecciones y otros tipos de ataques.
- **Encabezados de Seguridad**: Uso de Helmet para configurar encabezados HTTP de seguridad.
- **Autenticación y Autorización**: Implementación planificada para futuras mejoras.

### **Pruebas**

- Las pruebas unitarias y de integración se han implementado utilizando Mocha y Chai. Estas pruebas aseguran que las funcionalidades críticas de la API funcionen correctamente y que las interacciones con la base de datos se realicen como se espera.

---