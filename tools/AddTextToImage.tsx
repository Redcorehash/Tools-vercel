import React, { useState } from 'react';

const AddTextToImage = () => {
  const [image, setImage] = useState<string | null>(null);
  const [text, setText] = useState('');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h1>Add Text to Image Tool</h1>
      <p>Upload an image and add text to it.</p>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <input
        type="text"
        placeholder="Enter text to add"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {image && (
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <img src={image} alt="Uploaded" style={{ maxWidth: '100%', height: 'auto' }} />
          {text && (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                fontSize: '24px',
                fontWeight: 'bold',
              }}
            >
              {text}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AddTextToImage;
