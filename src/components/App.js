import "../static/scss/app.scss";
import React, {useState} from "react";
import {HomeScreen, InterestsScreen} from "./Screens";
import {MobileMenu} from "./navigation";

const screens = {
  home: <HomeScreen />,
  interests: <InterestsScreen />
};

function App(props) {
  const [mobileMenuOpen, setMobileMenu] = useState(false);
  const [mobileMenuOpening, setMobileMenuOpening] = useState(0);
  const [currentScreen, setCurrentScreen] = useState("interests");

  const mobileMenuClick = () => {
    if (!mobileMenuOpening) {
      setMobileMenu(!mobileMenuOpen);
      setMobileMenuOpening(1);
      setTimeout(() => setMobileMenuOpening(0), 500);
    }
  };

  const changeCurrentScreen = screen => {
    setMobileMenu(!mobileMenuOpen);
    setMobileMenuOpening(0);
    setCurrentScreen(screen);
  };

  return (
    <div className="app">
      <MobileMenu
        toggleMenu={mobileMenuClick}
        menuActive={mobileMenuOpen}
        changeCurrentScreen={changeCurrentScreen}
      />
      {screens[currentScreen]}
    </div>
  );
}

export default App;
