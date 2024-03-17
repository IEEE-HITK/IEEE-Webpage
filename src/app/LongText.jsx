"use client"
import { useState } from 'react';

const LongText = ({ text, maxLength }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div>
      {showFullText ? (
        <p>{text}</p>
      ) : (
        <p>{text.slice(0, maxLength)}...</p>
      )}
      <a href="#" onClick={toggleShowFullText} style={{ color: 'grey', textDecoration: 'underline' }}>
        {showFullText ? 'Read Less' : 'Read More'}
      </a>
    </div>
  );
};

export default LongText;
