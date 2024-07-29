import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import { getMessages, postMessage } from './chatService';
import ErrorDisplay from '../errorHandling/ErrorDisplay';

/**
 * Component representing the main chat interface.
 * It fetches and displays messages, handles sending new messages, and manages server error state.
 */
const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [serverError, setServerError] = useState(false);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const data = await getMessages();
        setMessages(data);
        setServerError(false); // Reset error state on successful fetch
      } catch (error) {
        console.error('Error fetching messages:', error);
        setServerError(true);
      }
    }

    fetchMessages();

    // Re-fetch messages at regular intervals (e.g., every 2 seconds)
    const interval = setInterval(fetchMessages, 2000);
    return () => clearInterval(interval);
  }, []);

  /**
   * Handles sending a new message.
   * @param {string} content - The content of the message to send.
   * @param {string} nickname - The nickname of the user sending the message.
   */
  const handleSendMessage = async (content, nickname) => {
    try {
      await postMessage(content, nickname);
      setServerError(false); // Reset error state on successful post
    } catch (error) {
      console.error('Error posting message:', error);
      setServerError(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Off Topic Chat</h1>
      <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-4">
        <ErrorDisplay error={serverError} />
        {!serverError && (
          <>
            <MessageList messages={messages} />
            <MessageForm onSendMessage={handleSendMessage} />
          </>
        )}
      </div>
    </div>
  );
};

export default Chat;
