import React from "react";
import CardCollection from "./CardCollection";

function MusicCollection(props) {
  var music = [
    {
      id: 1,
      name: "Dermot Kennedy",
      imageSource: "./dermot-kennedy.jpg",
      pixelColor: "#b58d59"
    },
    {
      id: 2,
      name: "Taylor Swift",
      imageSource: "./taylor-swift.jpg",
      pixelColor: "#cdd6e7"
    },
    {id: 3, name: "NF", imageSource: "./nf.jpg", pixelColor: "#020202"},
    {id: 4, name: "Ed Sheeran", imageSource: "./ed-sheeran.jpg", pixelColor: "#8ea5a8"},
    {id: 5, name: "Dean Lewis", imageSource: "./dean-lewis.jpg", pixelColor: "#e3e0d7"}
  ];

  return <CardCollection cards={music} />;
}

export default MusicCollection;

MusicCollection.propTypes = {};
