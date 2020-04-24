import "../static/scss/header.scss";
import React from "react";

function Header(props) {
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="logo-wrapper">
          <div className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="240"
              height="240"
              viewBox="0 0 240 240">
              <path d="M0 90 L57 90 L217 240 L160 240 Z" />
              <path d="M8 0 L150 0 C240 0 240 130 150 145.30 L91.33 90 L150 90 C182 90 182 42.5 150 42 L52.8 42 Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

// <div className="menu-wrapper">
//   <div className="menu-hamburger"></div>
//   <div className="menu-txt">Menu</div>
// </div>;
