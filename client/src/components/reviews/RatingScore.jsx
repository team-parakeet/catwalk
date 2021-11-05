import React, { useState, useEffect } from 'react';
import Score from './Score.jsx';
import Stars from './Stars.jsx';
import { RatingScoreContainer, NumberOfReviewsBar } from '../styles/reviews/RatingScoreContainer.styled.js';

function RatingScore({ reviews }) {
  const [avgRating, setAvgRating] = useState('');
  const [numOfReviews, setNumOfReviews] = useState(null);

  useEffect(() => {
    if (reviews.length !== 0) {
      const getAvgRating = () => {
        let sum = 0;
        for (let i = 0; i < reviews.length; i++) {
          let currentReview = reviews[i];
          sum += currentReview.rating;
        }
        return sum / reviews.length;
      }
      setAvgRating(getAvgRating())
      setNumOfReviews(reviews.length)
    }
  }, [reviews])

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