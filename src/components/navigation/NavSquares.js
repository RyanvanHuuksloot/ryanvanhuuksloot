import "../../static/scss/nav-squares.scss";
import React from "react";

function NavSquares(props) {
  const squares = [];

  for (var i = 0; i < props.numberOfSlides; i++) {
    squares.push(i);
  }

  return (
    <div className="nav-wrapper">
      <div className="nav-squares-wrapper">
        {squares.map((value, index) => {
          return (
            <div key={index} className="nav-square-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                version="1.1"
                className={`${props.currentSlide === index ? "active" : ""}`}
                onClick={() => props.onNavSquareClick(index)}>
                <path d="M0 0 L0 8 L8 8 L8 0 Z" />
              </svg>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NavSquares;
