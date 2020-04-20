import "../static/scss/panel-container.scss";
import React from "react";

function PanelContainer(props) {
  return (
    <div className="panel-container">
      <div className="slide">
        <div className="slide-content txt">
          <div className="txt-wrapper">
            <span className="copy">{props.header}</span>
            <h2>
              <span>{props.titleSpan}</span> {props.title}
            </h2>
            <span className="subtitle">{props.subtitle}</span>
            <p className="excerpt">{props.excerpt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PanelContainer;
