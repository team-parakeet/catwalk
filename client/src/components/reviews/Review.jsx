import React from 'react';

function Review( {review} ) {
  return (
    <div className="review">
      <div className="review-date">
        {review.date}
      </div>
      <div className="review-stars">
        {review.rating} stars
      </div>
      <div className="review-title">
        <h3>{review.summary}</h3>
      </div>
      <div className="review-body">
        {review.body}
      </div>
      <div className="review-recommend">
        Recommended? {review.recommend.toString()}
      </div>
      <div className="review-user">
        user: {review.reviewer_name}
      </div>
      {review.photos.map(photo => {
        return <div>PHOTO URL{photo.url}</div>
      })}
    </div>
  )
}

export default Review;