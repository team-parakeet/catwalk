import React, { useEffect, useState } from 'react';
import Review from './Review.jsx';

function ReviewsList({ reviews }) {
  // what props does this component need?
  // what state does this component need?
  const [numReviewsShown, setNumReviewsShown] = useState(2);

  useEffect(() => {
    setNumReviewsShown(2)
  }, [reviews])

  const handleMoreReviewsOnClick = () => {
    numReviewsShown + 2 <= reviews.length ? setNumReviewsShown(prev => prev + 2) : setNumReviewsShown(reviews.length)
  }

  const handleShowLessOnClick = () => {
    setNumReviewsShown(2)
  }

  if (reviews.length === 0) {
    return null;
  }

  const reviewsToShow = reviews.slice(0, numReviewsShown);

  return (
    <div className="reviews-list-container">
      REVIEWS:
      {reviewsToShow.map(review => {
        return <Review key={review.review_id} review={review}/>
      })}
      <div className="reviews-buttons">
        {reviews.length < 2 || reviewsToShow.length === reviews.length ? null : <button className="more-reviews-button" onClick={handleMoreReviewsOnClick}>MORE REVIEWS</button> }
        {reviewsToShow.length === reviews.length ? <button className="show-less-button" onClick={handleShowLessOnClick}>SHOW LESS</button> : null}
        <button className="add-review-button">ADD A REVIEW</button>
      </div>
    </div>
  )
}


export default ReviewsList;