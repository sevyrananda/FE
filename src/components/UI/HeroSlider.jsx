import React from "react";

import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/hero-slider.css";

const HeroSlider = () => {
  return (
    <div className="slider__item slider__item-01 mt0">
      <Container>
        <div className="slider__content">
          <h4 className="text-light mb-3">
            BEST CAMPING EQUIPMENT RENTAL AROUND THE WORLD
          </h4>
          <h1 className="text-light mb-0">Enjoy camping</h1>
          <h2 className="text-light mb-4">activities</h2>
          <h4 className="text-light mb-3">
            easily and efficiently with Adventure Pro camping equipment rental.
          </h4>
        </div>
      </Container>
    </div>
  );
};

export default HeroSlider;
