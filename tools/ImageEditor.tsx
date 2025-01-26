import React, { useState } from 'react';

const ImageEditor = () => {
  const [image, setImage] = useState<string | null>(null);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);

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
      <h1>Image Editor</h1>
      <p>Edit your images with advanced tools.</p>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && (
        <div>
          <div>
            <label>Brightness:</label>
            <input
              type="range"
              min="0"
              max="200"
              value={brightness}
              onChange={(e) => setBrightness(Number(e.target.value))}
            />
          </div>
          <div>
            <label>Contrast:</label>
            <input
              type="range"
              min="0"
              max="200"
              value={contrast}
              onChange={(e) => setContrast(Number(e.target.value))}
            />
          </div>
          <img
            src={image}
            alt="Uploaded"
            style={{
              maxWidth: '100%',
              height: 'auto',
              filter: `brightness(${brightness}%) contrast(${contrast}%)`,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageEditor;
