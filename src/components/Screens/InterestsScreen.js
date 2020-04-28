import "../../static/scss/screens/interests-screen.scss";
import React, {useState} from "react";

function InterestsScreen(props) {
  const [currentTab, setCurrentTab] = useState("music");

  const tabs = ["music", "video", "books"];

  const changeTab = tabName => {
    setCurrentTab(tabName);
  };

  return (
    <div className="interest-wrapper">
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
    </div>
  );
}

export default InterestsScreen;
