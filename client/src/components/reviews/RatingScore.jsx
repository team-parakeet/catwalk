import React, { useState, useEffect } from 'react';
import Score from './Score.jsx';
import Stars from '../shared/Stars.jsx';
import { RatingScoreContainer, NumberOfReviewsBar } from '../styles/reviews/RatingScoreContainer.styled.js';

function RatingScore({ reviews, numOfReviews, avgRating }) {
  if (!avgRating || reviews.length === 0) {
    return null
  }

  return (
    <RatingScoreContainer>
      <Score avgRating={avgRating}/>
      <Stars avgRating={avgRating}/>
      <NumberOfReviewsBar>
        {numOfReviews} reviews
      </NumberOfReviewsBar>
    </RatingScoreContainer>
  )
}

export default RatingScore;