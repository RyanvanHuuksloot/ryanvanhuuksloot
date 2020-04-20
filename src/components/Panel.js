import "../static/scss/panel.scss";
import React from "react";

function Panel(props) {
  return (
    <div className={`panel ${props.styles ? props.styles.join(" ") : ""}`}>
      {props.children}
    </div>
  );
}

export default Panel;
