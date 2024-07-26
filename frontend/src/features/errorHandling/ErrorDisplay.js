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
      Y si... los NPC´s lo hicieron de nuevo ¡SERVER HAS FALLEN! aguarda un momento que Guille está atendiendolo ;)
    </div>
  );
};

export default ErrorDisplay;
