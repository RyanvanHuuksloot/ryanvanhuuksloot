import React from "react";
import CardCollection from "./CardCollection";

function TelevisionCollection(props) {
  var shows = [
    {id: 1668, name: "Friends", imageSource: "./friends.jpg", pixelColor: "#1f1513"},
    {id: 14658, name: "Survivor", imageSource: "./survivor.jpg", pixelColor: "#1f1513"},
    {
      id: 34307,
      name: "Shameless",
      imageSource: "./shameless.jpg",
      pixelColor: "#d2d0d1"
    },
    {
      id: 63333,
      name: "The Last Kingdom",
      imageSource: "./the-last-kingdom.jpg",
      pixelColor: "#282e32"
    },
    {
      id: 74016,
      name: "The Resident",
      imageSource: "./the-resident.jpg",
      pixelColor: "#1a8887"
    },
    {
      id: 77236,
      name: "A Discovery of Witches",
      imageSource: "./a-discovery-of-witches.jpg",
      pixelColor: "#1b1d26"
    },
    {
      id: 82856,
      name: "The Mandalorian",
      imageSource: "./the-mandalorian.jpg",
      pixelColor: "#f4dfb7"
    },
    {
      id: 94587,
      name: "Merry Happy Whatever",
      imageSource: "./merry-happy-whatever.jpg",
      pixelColor: "#af2923"
    },
    {
      id: 71446,
      name: "Money Heist",
      imageSource: "./money-heist.jpg",
      pixelColor: "#52080d"
    }
  ];

  return <CardCollection cards={shows} />;
}

export default TelevisionCollection;

TelevisionCollection.propTypes = {};
