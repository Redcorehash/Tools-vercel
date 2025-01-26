import React, { useState, useRef } from 'react';

const VideoCliper = () => {
  const [video, setVideo] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setVideo(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClip = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = startTime;
      videoRef.current.play();
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.pause();
        }
      }, (endTime - startTime) * 1000);
    }
  };

  return (
    <div>
      <h1>Video Clipper</h1>
      <p>Clip and trim your videos.</p>
      <input type="file" accept="video/*" onChange={handleVideoUpload} />
      {video && (
        <div>
          <video ref={videoRef} src={video} controls style={{ maxWidth: '100%' }} />
          <div>
            <label>Start Time (seconds):</label>
            <input
              type="number"
              value={startTime}
              onChange={(e) => setStartTime(Number(e.target.value))}
            />
          </div>
          <div>
            <label>End Time (seconds):</label>
            <input
              type="number"
              value={endTime}
              onChange={(e) => setEndTime(Number(e.target.value))}
            />
          </div>
          <button onClick={handleClip}>Clip Video</button>
        </div>
      )}
    </div>
  );
};

export default VideoCliper;
