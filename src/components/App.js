import "../static/scss/app.scss";
import React, {useState} from "react";
import {MobileMenu} from "./navigation";

function App(props) {
  const [mobileMenuOpen, setMobileMenu] = useState(false);

  const mobileMenuClick = () => {
    setMobileMenu(!mobileMenuOpen);
  };

  return (
    <div className="app">
      <MobileMenu toggleMenu={mobileMenuClick} menuActive={mobileMenuOpen} />
    </div>
  );
}

export default App;
