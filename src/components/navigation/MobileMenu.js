import "../../static/scss/navigation/mobile-menu.scss";
import React from "react";

function MobileMenu(props) {
  return (
    <div
      className={`mobile-menu ${props.menuActive ? "active" : ""}`}
      onClick={() => props.toggleMenu()}>
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

export default MobileMenu;
