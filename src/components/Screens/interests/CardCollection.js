import "../../../static/scss/screens/interests/card-collection.scss";
import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";

function CardCollection(props) {
  return (
    <div className="cards-wrapper">
      <div className="cards">
        {props.cards.map(({name, imageSource, pixelColor}, index) => {
          return (
            <Card
              key={index}
              name={name}
              imageSource={imageSource}
              pixelColor={pixelColor}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CardCollection;

CardCollection.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
};
