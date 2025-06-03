import React, { useEffect, useRef, useState } from "react";
import videoBg from "../../images/Animation RushWebBannerTypo.mp4";
import "../../Bannervideo.css";

const Bannervideo = () => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
            setIsLoaded(true);
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(video);
    }
  }, []);

  return (
    <div className="banner-video-wrapper position-relative w-100 overflow-hidden">
      <video
        ref={videoRef}
        className={`position-absolute top-50 start-50 translate-middle w-100 h-100 object-fit-cover ${isLoaded ? "video-visible" : "video-hidden"}`}
        src={videoBg}
        muted
        loop
        playsInline
        preload="none"
      />
      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center text-center">
        {/* Overlay content if needed */}
      </div>
    </div>
  );
};

export default Bannervideo;
