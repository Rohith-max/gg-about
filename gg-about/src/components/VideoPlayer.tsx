
import React from 'react';

interface VideoPlayerProps {
  src?: string;
  poster?: string;
}

const VideoPlayer = ({ src, poster }: VideoPlayerProps) => {
  return (
    <div className="w-full h-full bg-black overflow-hidden">
      <img 
        src="/brand-story.webp" 
        alt="Brand Story" 
        className="w-full h-full object-cover border-0 m-0 p-0"
      />
    </div>
  );
};

export default VideoPlayer;
