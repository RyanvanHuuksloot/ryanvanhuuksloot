import "../../static/scss/screens/home-screen.scss";
import React from "react";

function HomeScreen() {
  return (
    <div className="home-wrapper">
      <span className="home-square-one"></span>
      <span className="home-square-two"></span>
      <div className="home-text-wrapper">
        <h1 className="home-name">Ryan van Huuksloot</h1>
        <h2 className="home-occupation">Software Developer</h2>
        <p className="home-description">
          Passionate, self motivated dreamer who loves to solve problems.
        </p>
      </div>
    </div>
  );
}

export default HomeScreen;

HomeScreen.propTypes = {};
