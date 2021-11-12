import React from 'react';
import ReviewsColumn from './ReviewsColumn.jsx';
import ReviewsContainer from './ReviewsContainer.jsx';
import { ReviewsHeader, SectionWrapper } from './../styles/reviews/ReviewsStyled.styled.js';

function Reviews({ reviews, productId, avgRating, fetchReviews }) {
  return (
    <>
      <ReviewsHeader>
        RATINGS & REVIEWS
      </ReviewsHeader>
      <SectionWrapper>
        <ReviewsColumn reviews={reviews} productId={productId} avgRating={avgRating} />
        <ReviewsContainer reviews={reviews} productId={productId} fetchReviews={fetchReviews}/>
      </SectionWrapper>
    </>
  )
}

export default Reviews;