import React from 'react';
import MessageForm from './MessageForm';
import TagSelector from './TagSelector';

const ControlPanel = ({ onSendMessage, currentTag, setCurrentTag, refreshMessages }) => {
  return (
    <div className="flex flex-col md:w-1/3 m-4">
      <MessageForm onSendMessage={onSendMessage} currentTag={currentTag} refreshMessages={refreshMessages} />
      <TagSelector currentTag={currentTag} setCurrentTag={setCurrentTag} />
    </div>
  );
};

export default ControlPanel;
