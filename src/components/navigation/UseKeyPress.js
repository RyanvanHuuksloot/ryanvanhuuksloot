import {useEffect} from "react";

function UseKeyPress(currentSlide, numberOfSlides, setCurrentSlide) {
  function downHandler({key}) {
    if (key === "ArrowDown" && currentSlide < numberOfSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  }

  const upHandler = ({key}) => {
    if (key === "ArrowUp" && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  });
}

export default UseKeyPress;
