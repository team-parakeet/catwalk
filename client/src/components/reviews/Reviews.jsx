import React from 'react';
import ReviewsColumn from './ReviewsColumn.jsx';
import ReviewsContainer from './ReviewsContainer.jsx';
import { SectionWrapper } from './../styles/reviews/SectionWrapper.styled.js';
import { ReviewsHeader } from './../styles/reviews/ReviewsHeader.styled.js';

function Reviews({ reviews, productId }) {
  return (
    <>
      <ReviewsHeader>
        RATINGS & REVIEWS
      </ReviewsHeader>
      <SectionWrapper>
        <ReviewsColumn reviews={reviews} productId={productId} />
        <ReviewsContainer reviews={reviews} productId={productId} />
      </SectionWrapper>
    </>
  )
}

export default Reviews;