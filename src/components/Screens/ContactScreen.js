import "../../static/scss/screens/contact-screen.scss";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

function ContactScreen() {
  return (
    <div className="contact-wrapper">
      <span className="contact-square-one"></span>
      <span className="contact-square-two"></span>
      <div className="contact-text-wrapper">
        <h1 className="contact-title">
          I'm Toronto based, <br />
          and welcome bribes in the form of hot chocolate.
        </h1>
        <p className="contact-description">
          Let's connect. Linkedin is the best way to get my attention.
        </p>
        <div className="contact-social-media-wrapped">
          <a href="https://github.com/RyanvanHuuksloot">
            <FontAwesomeIcon icon={faGithub} className="contact-icon" size="3x" />
          </a>
          <a href="https://www.linkedin.com/in/ryanvanhuuksloot">
            <FontAwesomeIcon icon={faLinkedin} className="contact-icon" size="3x" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactScreen;

ContactScreen.propTypes = {};
