import React, { useState } from 'react';

const StyleSiteGenerate = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#000000');
  const [fontSize, setFontSize] = useState('16px');

  return (
    <div>
      <h1>Style Site Generator</h1>
      <p>Generate a styled website based on your preferences.</p>
      <div>
        <label>Background Color:</label>
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
      </div>
      <div>
        <label>Text Color:</label>
        <input
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        />
      </div>
      <div>
        <label>Font Size:</label>
        <input
          type="text"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
        />
      </div>
      <div
        style={{
          backgroundColor,
          color: textColor,
          fontSize,
          padding: '20px',
          marginTop: '20px',
        }}
      >
        <h2>Preview</h2>
        <p>This is a preview of your styled website.</p>
      </div>
    </div>
  );
};

export default StyleSiteGenerate;
