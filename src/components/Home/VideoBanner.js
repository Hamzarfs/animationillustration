import React, { useState } from 'react';
import '../../VideoBanner.css';
import bannerVideo from '../../images/Animation RushWebBannerTypo.mp4'; // Adjust path if different

const VideoBanner = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="video-banner-container">
      {!isVideoLoaded && (
        <div className="video-loader">
          <div className="spinner"></div>
        </div>
      )}

      <video
        className="video-banner-video"
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
      >
        <source src={bannerVideo} type="video/mp4" />
        
      </video>

      <div className="video-banner-overlay">
        {/* <h1>Welcome to Our Website</h1> */}
      </div>
    </div>
  );
};

export default VideoBanner;
