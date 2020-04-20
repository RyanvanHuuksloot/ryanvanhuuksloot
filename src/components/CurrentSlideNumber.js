import "../static/scss/current-slide-number.scss";
import React from "react";

function CurrentSlideNumber(props) {
  return (
    <div className="number-wrapper">
      <div className="number-count">
        <div className="number">{props.slide.padStart(2, "0")}</div>
      </div>
    </div>
  );
}

export default CurrentSlideNumber;
