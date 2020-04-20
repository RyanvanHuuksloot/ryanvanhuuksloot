import "../static/scss/show.scss";
import React, {useState} from "react";
// https://github.com/survivejs/webpack-book/issues/80
var images = require.context("../static/img", true);

function Show(props) {
  const [expanded, setExpanded] = useState(false);

  let imageSource = images(props.imageSource);
  const img_alt = props.name + " background";

  return (
    <div
      className={`show ${expanded ? "show-expanded" : ""}`}
      onClick={() => setExpanded(!expanded)}>
      <img src={imageSource} alt={img_alt} className="show-image" />
      {expanded && (
        <div className="show-description">
          <div className="show-name">{props.name}</div>
        </div>
      )}
    </div>
  );
}

export default Show;
