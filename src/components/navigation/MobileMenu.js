import "../../static/scss/navigation/mobile-menu.scss";
import React, {useEffect} from "react";
import PropTypes from "prop-types";

function MobileMenu(props) {
  useEffect(() => {
    if (props.menuActive && document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    } else if (!props.menuActive && document.body.style.overflow === "hidden") {
      document.body.style.overflow = "unset";
    }
  }, [props.menuActive]);

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

MobileMenu.propTypes = {
  menuActive: PropTypes.bool,
  changeCurrentScreen: PropTypes.func
};
