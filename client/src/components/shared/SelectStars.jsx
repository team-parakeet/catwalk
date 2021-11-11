import React from 'react';
import { SelectedStarsStyled } from '../styles/shared/StarsStyled.styled.js';

export function SelectStars({ handleStarRatingOnChange }) {
  return (
    <SelectedStarsStyled className="select-star-rating">
      <input type="radio" id="star5" name="select-star-rating" value="5" onChange={ e => handleStarRatingOnChange(e) }/>
      <label for="star5"></label>
      <input type="radio" id="star4" name="select-star-rating" value="4" onChange={ e => handleStarRatingOnChange(e) }/>
      <label for="star4"></label>
      <input type="radio" id="star3" name="select-star-rating" value="3" onChange={ e => handleStarRatingOnChange(e) }/>
      <label for="star3"></label>
      <input type="radio" id="star2" name="select-star-rating" value="2" onChange={ e => handleStarRatingOnChange(e) }/>
      <label for="star2"></label>
      <input type="radio" id="star1" name="select-star-rating" value="1" onChange={ e => handleStarRatingOnChange(e) }/>
      <label for="star1"></label>
  </SelectedStarsStyled>
  )
}

export default SelectStars;