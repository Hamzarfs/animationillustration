import React from "react";
import "../../TrackRecord.css";

const TrackRecord = () => {
  return (
    <section className="trackrecord">
      <div className="container">
        {/* Row 1: Heading and Description */}
        <div className="row">
          <div className="col-12">
            <h2 className="trackrecord-heading">Our Flawless Track Record</h2>
            <p className="trackrecord-description">
              Enjoy peace of mind with our proven track record in animation production, featuring hundreds of successful projects, satisfied clients, and industry-leading turnaround times.
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
