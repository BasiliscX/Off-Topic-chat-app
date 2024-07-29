import React, { useState } from 'react';

const MessageForm = ({ onSendMessage, currentTag }) => {
  const [input, setInput] = useState('');
  const [nickname, setNickname] = useState(localStorage.getItem('nickname') || 'Anon');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim()) {
      onSendMessage(input, nickname, currentTag);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
      <input
        type="text"
        value={nickname}
        onChange={(e) => {
          setNickname(e.target.value);
          localStorage.setItem('nickname', e.target.value);
        }}
        className="p-2 border border-gray-300 rounded-md focus:outline-none"
        placeholder="Tu nickname..."
      />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 border border-gray-300 rounded-md focus:outline-none"
        placeholder="Escribe tu mensaje..."
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-md">
        Enviar
      </button>
    </form>
  );
};

export default MessageForm;
