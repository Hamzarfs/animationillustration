import React from "react";
import "../../TrackRecord.css";

const TrackRecord = () => {
  return (
    <section className="trackrecord">
      <div className="container">
        {/* Row 1: Heading and Description */}
        <div className="row">
          <div className="col-12">
            <h2 className="trackrecord-heading">A Proven Track Record of Excellence </h2>
            <p className="trackrecord-description">
            Having years of experience in the animation sector, we have been successful in delivering hundreds of animation projects to clients from varied industries. Quality, innovation, and client satisfaction have earned the company a reputation as a leading animation studio.
            </p>
          </div>
        </div>

        {/* Row 2: Stats */}
        <div className="row mt-4 track-record-num">
          {/* Column 1 */}
          <div className="col-md-3 col-sm-6 trackrecord-border">
            <h2 className="lightblue-h2">200+</h2>
            <p>Animators and game Development Artists</p>
          </div>
          {/* Column 2 */}
          <div className="col-md-3 col-sm-6 trackrecord-border">
            <h2 className="lightblue-h2">5</h2>
            <p>Years of Experience</p>
          </div>
          {/* Column 3 */}
          <div className="col-md-3 col-sm-6 trackrecord-border">
            <h2 className="lightblue-h2">16</h2>
            <p>Months Average Partnerships</p>
          </div>
          {/* Column 4 */}
          <div className="col-md-3 col-sm-6">
            <h2 className="lightblue-h2">72%</h2>
            <p>Repeat Clientele</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
