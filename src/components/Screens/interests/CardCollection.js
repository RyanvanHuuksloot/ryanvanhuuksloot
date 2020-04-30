import "../../../static/scss/screens/interests/card-collection.scss";
import React from "react";
import Card from "./Card";

function CardCollection(props) {
  return (
    <div className="cards-wrapper">
      <div className="cards">
        {props.cards.map(({name, imageSource}, index) => {
          return <Card key={index} name={name} imageSource={imageSource} />;
        })}
      </div>
    </div>
  );
}

export default CardCollection;
