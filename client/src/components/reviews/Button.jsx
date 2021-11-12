import React from 'react';
import { Btn } from './../styles/reviews/ButtonStyled.styled.js';

function Button({ handleOnClick, text }) {

  return (
    <Btn onClick={handleOnClick}>{text}</Btn>
  )
}

export default Button;