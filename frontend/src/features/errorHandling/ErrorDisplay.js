// src/features/errorHandling/ErrorDisplay.js
import React from 'react';

const ErrorDisplay = ({ error }) => {
  if (!error) return null;

  return (
    <div className="text-red-500 p-4">
      Y si... los NPC´s lo hicieron de nuevo ¡SERVER HAS FALLEN! aguarda un momento que Guille está atendiendolo ;)
    </div>
  );
};

export default ErrorDisplay;
