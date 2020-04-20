import {useEffect} from "react";

function UseScroll(currentSlide, numberOfSlides, setCurrentSlide) {
  function scrollHandler(event) {
    window.requestAnimationFrame(() => {
      if (event.deltaY > 0 && currentSlide < numberOfSlides - 1) {
        setCurrentSlide(currentSlide + 1);
      } else if (event.deltaY < 0 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    });
  }

  useEffect(() => {
    window.addEventListener("wheel", scrollHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("wheel", scrollHandler);
    };
  });
}

export default UseScroll;
