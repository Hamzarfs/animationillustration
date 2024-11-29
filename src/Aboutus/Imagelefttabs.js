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
            <h1 className="imagelefttab-heading">
              Professional <span>E-Book</span> Services
            </h1>
            <p className="imagelefttab-description">
              Discover how our innovative solutions can transform your story,
              reduce complexity, and promote high-quality writing.
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
                  Empower authors by providing comprehensive publishing solutions that elevate their stories. We deliver expert editing, stunning design, and strategic marketing, ensuring that every book meets the industry standards and resonates with its intended audience.
                </p>
              )}
              {activeTab === "vision" && (
                <p>
                  To be the best publishing partner of every author by turning their visions into a captivating literary reality!
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
