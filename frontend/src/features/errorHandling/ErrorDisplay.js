import React from 'react';

/**
 * Component for displaying an error message when the server is not available.
 * @param {Object} props - The component props.
 * @param {boolean} props.error - Indicates whether there is an error to display.
 * @returns {JSX.Element|null} The error message element or null if no error.
 */
const ErrorDisplay = ({ error }) => {
  if (!error) return null;

  return (
    <div className="text-red-500 p-4">
      <h1>¡SERVER HAS FALLEN!</h1>
      <p>El servicio está caído :,(</p>
      <p>Dos posibles motivos:</p>
      <ul className="list-disc pl-6">
        <li>Por el momento, el sitio maneja una cantidad muy limitada de conexiones (debido al plan del hosting). El desarrollador está trabajando en alternativas mejores.</li>
        <li>El desarrollador está deployando funcionalidades del backend.</li>
      </ul>
      <p>En cualquier caso, el servicio se restaurará pronto.</p>
      <p>¡Gracias por elegir Off Topic!</p>
    </div>
  );
};

export default ErrorDisplay;
