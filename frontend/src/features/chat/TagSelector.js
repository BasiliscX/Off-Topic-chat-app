import React from 'react';

/**
 * Component for selecting chat tags.
 * @param {Object} props - Component properties
 * @param {number} props.currentTag - Currently selected tag ID
 * @param {function} props.setCurrentTag - Function to set the selected tag ID
 */
const TagSelector = ({ currentTag, setCurrentTag }) => {
  const tags = [
    { id: 0, name: 'Global' },
    { id: 1, name: 'Universidad' },
    { id: 2, name: 'Cultura' },
    { id: 3, name: 'Ragnarök' }
  ];

  return (
    <div className="flex overflow-x-auto mb-4">
      {tags.map(tag => (
        <button
          key={tag.id}
          onClick={() => setCurrentTag(tag.id)}
          className={`tag-button ${currentTag === tag.id ? 'active' : ''}`}
        >
          {tag.name}
        </button>
      ))}
    </div>
  );
};

export default TagSelector;
