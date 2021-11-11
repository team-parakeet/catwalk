import React from 'react';
import Score from './Score.jsx';
import Stars from '../shared/Stars.jsx';
import { RatingScoreContainer, NumberOfReviewsBar, FlexRow, StarScore } from '../styles/reviews/RatingScoreContainer.styled.js';

function RatingScore({ reviews, avgRating, numOfReviews }) {
  if (!avgRating || reviews.length === 0) {
    return null
  }

  return (
    <RatingScoreContainer>
      <FlexRow>
      <Score avgRating={avgRating}/>
      <StarScore>
        <Stars rating={avgRating} id={avgRating}/>
      </StarScore>
      </FlexRow>
      <NumberOfReviewsBar>
        {numOfReviews} reviews
      </NumberOfReviewsBar>
    </RatingScoreContainer>
  )
}

export default RatingScore;