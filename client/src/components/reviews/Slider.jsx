import React from 'react';
import { SliderStyled } from '../styles/reviews/SliderStyled.styled';

function Slider({ id, value, max}) {

  return (
    <SliderStyled
      className="slider"
      id={id}
      type="range"
      min="0"
      max={max}
      value={value}
      readOnly={true}
    />
  );
}

 export default Slider;