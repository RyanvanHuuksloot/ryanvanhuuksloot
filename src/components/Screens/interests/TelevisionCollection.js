import React from "react";
import CardCollection from "./CardCollection";

function TelevisionCollection(props) {
  var shows = [
    {id: 1668, name: "Friends", imageSource: "./friends.jpg"},
    {id: 14658, name: "Survivor", imageSource: "./survivor.jpg"},
    {id: 34307, name: "Shameless", imageSource: "./shameless.jpg"},
    {id: 63333, name: "The Last Kingdom", imageSource: "./the-last-kingdom.jpg"},
    {id: 74016, name: "The Resident", imageSource: "./the-resident.jpg"},
    {
      id: 77236,
      name: "A Discovery of Witches",
      imageSource: "./a-discovery-of-witches.jpg"
    },
    {
      id: 82856,
      name: "The Mandalorian",
      imageSource: "./the-mandalorian.jpg"
    },
    {
      id: 94587,
      name: "Merry Happy Whatever",
      imageSource: "./merry-happy-whatever.jpg"
    }
  ];

  return <CardCollection cards={shows} />;
}

export default TelevisionCollection;
