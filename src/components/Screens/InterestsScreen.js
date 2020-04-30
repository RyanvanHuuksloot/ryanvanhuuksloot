import "../../static/scss/screens/interests-screen.scss";
import React, {useState} from "react";
import {FilmCollection, MusicCollection, TelevisionCollection} from "./interests";

function InterestsScreen(props) {
  const [currentTab, setCurrentTab] = useState("music");

  const tabs = ["music", "television", "films", "books"];
  const collections = {
    music: <MusicCollection />,
    films: <FilmCollection />,
    television: <TelevisionCollection />
  };

  const changeTab = tabName => {
    setCurrentTab(tabName);
  };

  return (
    <div className="interest-wrapper">
      <h1>Interests</h1>
      <div className="interest-menu">
        {tabs.map((tab, index) => {
          return (
            <div
              key={index}
              className={`interest ${currentTab === tab ? "active" : ""}`}
              onClick={() => changeTab(tab)}>
              <div className="interest-content">
                <h3>{tab.toString()}</h3>
              </div>
            </div>
          );
        })}
      </div>
      {collections[currentTab]}
    </div>
  );
}

export default InterestsScreen;
