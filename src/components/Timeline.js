import "../static/scss/timeline.scss";
import React from "react";

//https://codepen.io/clintabrown/pen/yoFcC
function Timeline(props) {
  return (
    <div class="timeline">
      <div class="timeline-events">
        <div class="timeline-event timeline-event-years-5">
          <h2>2013-2017</h2>
          <h3>Queen's University</h3>
          <h4>Bachelor of Commerce with Honours and Distinction</h4>
          <h4>Bachelor of Computer Science with Distinction</h4>
        </div>
        <div class="timeline-event timeline-event-years-5">
          <h2>2018-Present</h2>
          <h3>Capital One</h3>
          <h4>Data Scientist</h4>
        </div>
      </div>
      <div class="timelines-years">
        <div>2014</div>
        <div>2016</div>
        <div>2018</div>
        <div>2020</div>
        <div>2022</div>
      </div>
    </div>
  );
}

export default Timeline;
