import React from 'react';
import { ButtonStyled } from '../styles/reviews/ButtonStyled.styled.js';

function Button({ handleOnClick, text }) {

  return (
    <ButtonStyled onClick={handleOnClick}>{text}</ButtonStyled>
  )
}

export default Button;