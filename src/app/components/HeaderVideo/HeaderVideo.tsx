"use client";

import React, { useEffect, useRef, useState } from "react";
import css from "./HeaderVideo.module.css";
const HeaderVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVideoVisible(true);
            if (videoRef.current) {
              videoRef.current.play();
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className={css.videoBackgroundContainer}>
      <video
        ref={videoRef}
        loop
        muted
        autoPlay
        className={css.videoBackground}
      >
        {isVideoVisible && (
          <source className=" max-[1024px]:block" src="/background-video-exmpl.mp4" type="video/mp4" />
        )}
        
          <source className="lg:hidden" src="/background-video-exmpl.webm" type="video/webm" />
        
        {/* Provide fallback text or images for unsupported browsers */}
        Your browser does not support the video tag.
      </video>
      <div className={css.contentOverlay}>
        <h1 className={css.textOverlay}>Welcome to Our Site</h1>
      </div>
    </div>
  );
};

export default HeaderVideo;