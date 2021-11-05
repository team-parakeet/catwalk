import React, { useState, useEffect } from 'react';
import ReviewsList from './ReviewsList.jsx';
import SortBy from './SortBy.jsx';
import Button from './Button.jsx';

function ReviewsContainer({ reviews, productId }) {
  const [currentReviews, setCurrentReviews] = useState(null);
  const [numReviewsShown, setNumReviewsShown] = useState(2);

  useEffect(() => {
    if (reviews.length !== 0) {
      setCurrentReviews(reviews)
    }
  }, [reviews])

  useEffect(() => {
    setNumReviewsShown(2)
  }, [currentReviews])

  const handleMoreReviewsOnClick = () => {
    numReviewsShown + 2 <= reviews.length ? setNumReviewsShown(prev => prev + 2) : setNumReviewsShown(reviews.length)
  }

  const handleShowLessOnClick = () => {
    setNumReviewsShown(2)
  }

  const handleAddReviewOnClick = () => {
    console.log('new review clicked')
  }

  if (!reviews.length || !currentReviews) {
    return null
  }

  const reviewsToShow = currentReviews.slice(0, numReviewsShown);

  return (
    <div>
      <SortBy setCurrentReviews={setCurrentReviews} productId={productId} />
      {reviews.length !== 0 &&
      <ReviewsList reviews={reviewsToShow}/>
      }
      {reviews.length < 2 || reviewsToShow.length === reviews.length ? null :
      <Button handleOnClick={handleMoreReviewsOnClick} text={'MORE REVIEWS'} />
      }
      {reviewsToShow.length === reviews.length &&
      <Button handleOnClick={handleShowLessOnClick} text={'SHOW LESS'} />
      }
      <Button handleOnClick={handleAddReviewOnClick} text={'ADD REVIEW'} />
    </div>
  )
}

export default ReviewsContainer;