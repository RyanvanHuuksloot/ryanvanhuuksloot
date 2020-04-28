import "../../static/scss/navigation/mobile-menu.scss";
import React from "react";

function MobileMenu(props) {
  return (
    <div className={`mobile-menu ${props.menuActive ? "active" : ""}`}>
      <div
        className={`mobile-menu-hamburger ${props.menuActive ? "active" : ""}`}
        onClick={() => props.toggleMenu()}>
        <span />
        <span />
        <span />
        <span />
      </div>
      {props.menuActive && (
        <div className="menu-items">
          <div className="menu-item" onClick={() => props.changeCurrentScreen("home")}>
            <h3>Home</h3>
          </div>
          <div className="menu-item" onClick={() => props.changeCurrentScreen("about")}>
            <h3>About Me</h3>
          </div>
          <div className="menu-item" onClick={() => props.changeCurrentScreen("work")}>
            <h3>Work</h3>
          </div>
          <div
            className="menu-item"
            onClick={() => props.changeCurrentScreen("interests")}>
            <h3>Interests</h3>
          </div>
          <div
            className="menu-item"
            onClick={() => props.changeCurrentScreen("contact")}>
            <h3>Contact</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
