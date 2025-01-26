import React, { useState } from 'react';

const DownloadVideo = () => {
  const [videoUrl, setVideoUrl] = useState('');

  const handleDownload = () => {
    if (videoUrl) {
      window.open(videoUrl, '_blank');
    }
  };

  return (
    <div>
      <h1>Download Video</h1>
      <p>Download videos from various sources.</p>
      <input
        type="text"
        placeholder="Enter video URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default DownloadVideo;
