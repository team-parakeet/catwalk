import React, { useState, useEffect } from 'react';
import ReviewsColumn from './ReviewsColumn.jsx';
import ReviewsContainer from './ReviewsContainer.jsx';
import { SectionWrapper } from './../styles/reviews/SectionWrapper.styled.js';
import { ReviewsHeader } from './../styles/reviews/ReviewsHeader.styled.js';

function Reviews({ reviews, productId, avgRating }) {
  const [numOfReviews, setNumOfReviews] = useState(null);

  useEffect(() => {
    if (reviews.length) {
      setNumOfReviews(reviews.length)
    }
  }, [])

  return (
    <>
      <ReviewsHeader>
        RATINGS & REVIEWS
      </ReviewsHeader>
      <SectionWrapper>
        <ReviewsColumn reviews={reviews} productId={productId} avgRating={avgRating} numOfReviews={numOfReviews} />
        <ReviewsContainer reviews={reviews} productId={productId} setNumOfReviews={setNumOfReviews} />
      </SectionWrapper>
    </>
  )
}

export default Reviews;