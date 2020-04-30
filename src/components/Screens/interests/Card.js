import "../../../static/scss/screens/interests/card.scss";
import React from "react";
var images = require.context("../../../static/img", true);

function Card(props) {
  return (
    <div className="card">
      <img
        src={images(props.imageSource)}
        alt={props.name + " wallpaper"}
        className="card-image"
      />
      <div className="card-info">
        <h3 className="card-title">{props.name}</h3>>
      </div>
    </div>
  );
}

export default Card;
