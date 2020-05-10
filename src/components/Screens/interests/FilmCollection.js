import React from "react";
import CardCollection from "./CardCollection";

function FilmCollection(props) {
  var films = [
    {
      id: 299534,
      name: "Avengers",
      imageSource: "./avengers.jpg",
      pixelColor: "#303074"
    },
    {
      id: 399579,
      name: "Alita: Battle Angel",
      imageSource: "./alita-battle-angel.jpg",
      pixelColor: "#39566d"
    },
    {id: 38757, name: "Tangled", imageSource: "./tangled.jpg", pixelColor: "#39566d"},
    {
      id: 332562,
      name: "A Star Is Born",
      imageSource: "./a-star-is-born.jpg",
      pixelColor: "#3d382e"
    },
    {
      id: 466081,
      name: "The Informer",
      imageSource: "./the-informer.jpg",
      pixelColor: "#f6f3ef"
    },
    {
      id: 75656,
      name: "Now You See Me",
      imageSource: "./now-you-see-me.jpg",
      pixelColor: "#070606"
    },
    {
      id: 339692,
      name: "Shot Caller",
      imageSource: "./shot-caller.jpg",
      pixelColor: "#94927f"
    }
  ];

  return <CardCollection cards={films} />;
}

export default FilmCollection;

FilmCollection.propTypes = {};
