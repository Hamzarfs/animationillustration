import React, { useState } from "react";
import { FaBullseye, FaEye } from "react-icons/fa"; // Import the required icons
import '../Imagerighttab.css';

const ImageLeftTab = ({ imageleft, imageHeight, imageWidth, objectfit }) => {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <div className="imagelefttab-section">
      <div className="container mb-5">
        <div className="row">
          {/* Left Column (Image) */}
          <div className="col-md-6 align-content-center">
            <img
              src={imageleft}
              alt="Open Book"
              className="imagelefttab-image"
              style={{
                objectFit: objectfit,
                height: imageHeight, // Use the passed height prop
                width: imageWidth,   // Use the passed width prop
              }}
            />
          </div>

          {/* Right Column (Content) */}
          <div className="col-md-6">
            <h2 className="imagelefttab-heading">
          
            Our Approach to   <span> Excellence</span> 
               
            </h2>
            <p className="imagelefttab-description">
            Our approach is driven by a passion for storytelling and a deep understanding of the animation process. By combining cutting-edge techniques with a keen sense of creativity, we produce animations that engage, inform, and inspire. At Animation Rush, we don’t just animate—we create experiences that resonate and leave a lasting impact.
            </p>

            {/* Tabs */}
            <div className="imagelefttab-tabs">
              <div
                className={`imagelefttab-tab ${
                  activeTab === "mission" ? "active" : ""
                }`}
                onClick={() => setActiveTab("mission")}
              >
                {/* Adding larger icons */}
                <FaBullseye style={{ marginRight: "10px", fontSize: "30px" }} />
                <h3>Mission</h3>
              </div>
              <div
                className={`imagelefttab-tab ${
                  activeTab === "vision" ? "active" : ""
                }`}
                onClick={() => setActiveTab("vision")}
              >
                {/* Adding larger icons */}
                <FaEye style={{ marginRight: "10px", fontSize: "30px" }} />
                <h3>Vision</h3>
              </div>
            </div>

            {/* Tab Content */}
            <div className="imagelefttab-content">
              {activeTab === "mission" && (
                <p>
                  At Animation Rush, our mission is to craft innovative and captivating animations that captivate audiences and inspire change. We are committed to pushing the boundaries of creativity, delivering exceptional, high-quality content that connects with viewers across all industries. Through our passion for storytelling, we aim to spark imagination, educate, and provide meaningful experiences that leave a lasting impact. At Animation Rush, we strive to turn visions into reality, creating animated worlds that resonate deeply and elevate every story we tell.
                </p>
              )}
              {activeTab === "vision" && (
                <p>
                To be the driving force behind groundbreaking and Flawless animations that transcend industries and touch lives. At Animation Rush, we believe animation is more than a medium—it’s a universal language that connects, educates, and inspires. To create animations that inspire, engage, and elevate. At Animation Rush, we aim to bridge the gap between imagination and reality, crafting visual stories that resonate on a profound level.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLeftTab;
