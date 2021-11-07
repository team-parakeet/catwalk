import React from 'react';
import StarRatings from 'react-star-ratings';
import { StarsStyled } from '../styles/reviews/StarsStyled.styled';

function Stars({ avgRating }) {
  return (
    <StarsStyled>
      <StarRatings
        rating={avgRating}
        starDimension="15px"
        starSpacing="0px"
      />
    </StarsStyled>
  )
}

export default Stars;