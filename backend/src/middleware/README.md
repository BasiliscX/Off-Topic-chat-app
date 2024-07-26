# middleware - Off Topic Chat

## Descripción

La carpeta `middleware` contiene middleware de Express utilizados para gestionar diversas tareas en la aplicación. Estos middleware son funciones que se ejecutan durante el ciclo de vida de una solicitud HTTP y pueden modificar la solicitud, la respuesta, o finalizar la solicitud antes de que llegue al controlador. Son útiles para realizar tareas como autenticación, validación, registro, y limitación de la tasa de solicitudes.

## Contenido

- **rateLimiter.js**: Implementa la limitación de la tasa de solicitudes para evitar abusos por parte de los usuarios. Utiliza el módulo `express-rate-limit` para limitar la cantidad de solicitudes que un cliente puede realizar en un periodo de tiempo definido.
  
- **validation.js**: Contiene middleware de validación de datos de entrada utilizando la biblioteca `Yup`. Asegura que los datos enviados en las solicitudes cumplan con las reglas de validación definidas antes de proceder con la lógica del controlador.

## Uso

Cada uno de estos archivos de middleware se importa y utiliza en los archivos de ruta correspondientes para aplicar sus funcionalidades. Por ejemplo, `rateLimiter.js` se aplica a rutas donde se desea limitar la tasa de solicitudes, y `validation.js` se utiliza para validar datos de entrada en rutas de creación o actualización de recursos.

## Ejemplos

### Ejemplo de uso de `rateLimiter.js`

```javascript
import rateLimiter from '../middleware/rateLimiter.js';

router.post('/api/message', rateLimiter, (req, res) => {
  // lógica de la ruta
});
```

### Ejemplo de uso de `validation.js`

```javascript
import { validateRequestBody, messageSchema } from '../middleware/validation.js';

router.post('/api/message', validateRequestBody(messageSchema), (req, res) => {
  // lógica de la ruta
});
```

Estos ejemplos muestran cómo integrar y utilizar el middleware en las rutas de la aplicación para mejorar la seguridad y la estabilidad del sistema.
