import React from 'react';
import dateFormatter from 'iso-date-formatter';
import Stars from './Stars.jsx';

function Review( {review} ) {

  const isoDate = review.date;
  const date = dateFormatter(isoDate, { format: 'MMM d, yyyy', namedMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] });

  return (
    <div className="review">
      <div className="review-date">
        {date}
      </div>
      <div className="review-stars">
        <Stars rating={review.rating}/>
      </div>
      <div className="review-title">
        <h3>{review.summary}</h3>
      </div>
      <div className="review-body">
        {review.body}
      </div>
      <div className="review-recommend">
        Recommend? {review.recommend ? 'Yes' : 'No'}
      </div>
      <div className="review-user">
        user: {review.reviewer_name}
      </div>
      {review.photos.map(photo => {
        return <div key={photo.id}>PHOTO URL{photo.url}</div>
      })}
    </div>
  )
}

export default Review;