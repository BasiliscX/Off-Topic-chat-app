import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import { getMessages, postMessage } from './chatService';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const data = await getMessages();
        setMessages(data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    }
    fetchMessages();
  }, []);

  const handleSendMessage = async (content) => {
    try {
      await postMessage(content);
      window.location.reload(); // Recarga la página después de enviar un mensaje
    } catch (error) {
      console.error('Error posting message:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Off Topic Chat</h1>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
        <MessageList messages={messages} />
        <MessageForm onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default Chat;
