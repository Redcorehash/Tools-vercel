import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Tools App</h1>
      <nav>
        <ul>
          <li><Link href="/tools/remove-background">Remove Background</Link></li>
          <li><Link href="/tools/add-text-to-image">Add Text to Image</Link></li>
          <li><Link href="/tools/style-site-generate">Style Site Generator</Link></li>
          <li><Link href="/tools/image-editor">Image Editor</Link></li>
          <li><Link href="/tools/video-clipper">Video Clipper</Link></li>
          <li><Link href="/tools/download-video">Download Video</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
