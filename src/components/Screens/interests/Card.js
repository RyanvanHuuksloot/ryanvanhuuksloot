import "../../../static/scss/screens/interests/card.scss";
import React, {useState} from "react";
import PropTypes from "prop-types";
var images = require.context("../../../static/img", true);

// Find Pixel Color Using https://imagecolorpicker.com/en/
function Card(props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const imageOnload = () => {
    setImageLoaded(!imageLoaded);
  };

  const cardBackgroundStyle = {
    backgroundColor: props.pixelColor
  };

  const displayImageStyle = {
    visibility: "hidden"
  };

  return (
    <div className="card" style={imageLoaded ? null : cardBackgroundStyle}>
      <img
        src={images(props.imageSource)}
        alt={props.name + " wallpaper"}
        className="card-image"
        onLoad={() => imageOnload()}
        style={imageLoaded ? null : displayImageStyle}
      />
      <div className="card-info">
        <h3 className="card-title">{props.name}</h3>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  name: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  pixelColor: PropTypes.string.isRequired
};
