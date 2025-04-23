'use client';
import React, { useState } from 'react';

const MyComponent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && (
        <div id="element">
          Hello
        </div>
      )}
    </div>
  );
};

export default MyComponent;