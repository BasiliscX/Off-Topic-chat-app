import React from 'react';

const MessageList = ({ messages }) => {
  return (
    <div className="h-64 overflow-y-scroll mb-4">
      {messages.map((msg, index) => (
        <div key={index} className="p-2 border-b border-gray-200">
          <strong>Anon:</strong> {msg.content}
          <div className="text-xs text-gray-500">
            {new Date(msg.createdAt).toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
