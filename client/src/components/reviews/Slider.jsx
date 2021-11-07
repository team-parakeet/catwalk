import React from 'react';
import { SliderStyled } from '../styles/reviews/SliderStyled.styled';

function Slider({ id, value }) {

  return (
    <SliderStyled
      className="slider"
      id={id}
      type="range"
      min="0"
      max="5"
      value={value}
      readOnly={true}
    />
  );
}

 export default Slider;