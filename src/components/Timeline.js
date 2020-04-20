import "../static/scss/timeline.scss";
import React from "react";

function Timeline(props) {
  return (
    <div class="timeline">
      <div class="timeline-event">
        <div class="timeline-event-icon"></div>
        <div class="timeline-event-copy">
          <p class="timeline-event-thumbnail">March 2018 - Present</p>
          <h3>Sr. Data Scientist</h3>
          <h4>Capital One</h4>
        </div>
      </div>
      <div class="timeline-event">
        <div class="timeline-event-icon"></div>
        <div class="timeline-event-copy">
          <p class="timeline-event-thumbnail">September 2013 - December 2017</p>
          <h4>B.Comm/Bachelor of Computer Science</h4>
          <h5>Queen's University</h5>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
