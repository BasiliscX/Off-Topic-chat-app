// src/features/chat/Chat.js
import React, { useState, useEffect, useCallback } from 'react';
import MessageList from './MessageList';
import { getMessages, postMessage } from './chatService';
import ErrorDisplay from '../errorHandling/ErrorDisplay';
import ControlPanel from './ControlPanel';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [serverError, setServerError] = useState(false);
  const [currentTag, setCurrentTag] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Memoize fetchMessages to avoid re-creating the function on every render
  const fetchMessages = useCallback(async () => {
    try {
      const data = await getMessages(currentTag);
      setMessages(data);
      setServerError(false);
    } catch (error) {
      console.error('Error fetching messages:', error);
      setServerError(true);
    }
  }, [currentTag]);

  useEffect(() => {
    fetchMessages();

    const interval = setInterval(fetchMessages, 60000); // Re-fetch messages every 60 seconds
    return () => clearInterval(interval);
  }, [fetchMessages]);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSendMessage = async (content, nickname, tag_id) => {
    try {
      await postMessage(content, nickname, tag_id);
      fetchMessages(); // Refresh messages after sending a new one
      setServerError(false);
    } catch (error) {
      console.error('Error posting message:', error);
      setServerError(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center md:justify-start">
      <h1 className="text-4xl font-bold mb-6 md:mb-8">Off Topic Chat</h1>
      <div className={`flex flex-col ${isDesktop ? 'md:flex-row' : ''} w-full max-w-6xl`}>
        {isDesktop ? (
          <>
            <ControlPanel
              onSendMessage={handleSendMessage}
              currentTag={currentTag}
              setCurrentTag={setCurrentTag}
              refreshMessages={fetchMessages}
            />
            <div className="flex-grow bg-white shadow-md rounded-lg p-4 ml-4 mr-4">
              <ErrorDisplay error={serverError} />
              {!serverError && <MessageList messages={messages} />}
            </div>
          </>
        ) : (
          <>
            <div className="flex-grow bg-white shadow-md rounded-lg p-4 ml-4 mr-4">
              <ErrorDisplay error={serverError} />
              {!serverError && <MessageList messages={messages} />}
            </div>
            <ControlPanel
              onSendMessage={handleSendMessage}
              currentTag={currentTag}
              setCurrentTag={setCurrentTag}
              refreshMessages={fetchMessages}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Chat;
