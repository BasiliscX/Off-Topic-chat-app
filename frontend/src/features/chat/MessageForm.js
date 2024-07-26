import React, { useState } from 'react';

/**
 * Component for the message input form.
 * @param {function} onSendMessage - Function to call when a message is sent.
 */
const MessageForm = ({ onSendMessage }) => {
  const [input, setInput] = useState('');

  /**
   * Handles the form submission event.
   * @param {React.FormEvent} event - The form submission event.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none"
        placeholder="Escribe tu mensaje..."
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-r-md">
        Enviar
      </button>
    </form>
  );
};

export default MessageForm;
