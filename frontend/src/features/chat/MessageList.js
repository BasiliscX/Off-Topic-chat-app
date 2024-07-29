import React from 'react';

/**
 * Component for displaying a list of messages.
 * @param {Array} messages - Array of message objects to display.
 */
const MessageList = ({ messages }) => {
  return (
    <div className="h-64 overflow-y-scroll mb-4">
      {messages.map((msg, index) => (
        <div key={index} className="p-2 border-b border-gray-200">
          <strong>{msg.nickname}:</strong> {msg.content}
          <div className="text-xs text-gray-500">
            {/* Log the createdAt field for debugging */}
            {console.log('CreatedAt:', msg.createdAt)}
            {/* Handle the createdAt field, checking if it's a valid date */}
            {msg.createdAt && !isNaN(new Date(msg.createdAt)) ? new Date(msg.createdAt).toLocaleString() : 'No date available'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
