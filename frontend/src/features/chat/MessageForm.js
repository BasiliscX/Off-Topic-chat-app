import React, { useState, useEffect } from 'react';

const MessageForm = ({ onSendMessage }) => {
  const [input, setInput] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const savedNickname = localStorage.getItem('nickname') || 'Anon';
    setNickname(savedNickname);
  }, []);

  const handleNicknameChange = (event) => {
    const newNickname = event.target.value;
    setNickname(newNickname);
    localStorage.setItem('nickname', newNickname);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim()) {
      onSendMessage(input, nickname);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
      <input
        type="text"
        value={nickname}
        onChange={handleNicknameChange}
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
