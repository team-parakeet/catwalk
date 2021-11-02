import React from 'react';
import dateFormatter from 'iso-date-formatter';

function Review( {review} ) {

  const isoDate = review.date;
  const date = dateFormatter(isoDate, { format: 'MMM d, yyyy', namedMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] });

  return (
    <div className="review">
      <div className="review-date">
        {date}
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