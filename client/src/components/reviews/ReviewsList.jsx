import React from 'react';
import Review from './Review.jsx';
import { ReviewsListContainer } from '../styles/reviews/ReviewsListContainer.styled.js';

function ReviewsList({ reviews }) {
  if (!reviews) {
    return null;
  }

  return (
    <ReviewsListContainer>
      {reviews.map(review => {
        return <Review key={review.review_id} review={review}/>
      })}
    </ReviewsListContainer>
  )
}

export default ReviewsList;