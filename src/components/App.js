import "../static/scss/app.scss";
import React, {useState, useEffect} from "react";
import Panel from "./Panel";
import {NavSquares, UseScroll, UseKeyPress, ScrollDownArrows} from "./navigation";
import {WorkSlide, ContactSlide} from "./slides";
import Headshot from "../static/img/headshot.jpg";
import Header from "./Header";
import PanelContainer from "./PanelContainer";

function App(props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const onNavSquareClick = index => {
    setCurrentSlide(index);
  };

  const numberOfSlides = 3;

  // Navigation Handling
  UseKeyPress(currentSlide, numberOfSlides, setCurrentSlide);
  // UseScroll(currentSlide, numberOfSlides, setCurrentSlide);

  const introSlide = {
    content: (
      <div className="slide">
        <Panel styles={["left"]}>
          <PanelContainer
            header="About Me"
            titleSpan="Hi!"
            title="I'm Ryan"
            subtitle="Data Developer"
            excerpt="I am a passionate technology enthusiast who loves building and learning new things!"
          />
        </Panel>
        <Panel styles={["right"]}>
          <img
            src={Headshot}
            alt="Headshot of Ryan"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              height: "100%"
            }}
          />
        </Panel>
        <ScrollDownArrows />
      </div>
    ),
    title: "About Me"
  };

  const slides = [introSlide, WorkSlide, ContactSlide];

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `${slides[currentSlide].title}`;
  });

  return (
    <div className="app">
      <Header />
      {slides[currentSlide].content}
      <NavSquares
        onNavSquareClick={onNavSquareClick}
        currentSlide={currentSlide}
        numberOfSlides={numberOfSlides}
      />
    </div>
  );
}

export default App;
