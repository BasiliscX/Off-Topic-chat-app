import React from 'react';

const MessageList = ({ messages }) => {
  return (
    <div className="h-64 overflow-y-scroll mb-4">
      {messages.map((msg, index) => (
        <div key={index} className="p-2 border-b border-gray-200">
          <strong>{msg.nickname}:</strong> {msg.content}
          <div className="text-xs text-gray-500">
            {msg.created_at ? new Date(msg.created_at).toLocaleString() : 'No date available'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
