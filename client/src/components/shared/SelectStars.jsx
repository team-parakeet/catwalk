import React from 'react';
import { SelectStarsStyled } from '../styles/shared/SelectStarsStyled.styled.js';

export function SelectStars({ handleStarRatingOnChange }) {
  return (
    <SelectStarsStyled className="select-star-rating">
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
  </SelectStarsStyled>
  )
}

export default SelectStars;