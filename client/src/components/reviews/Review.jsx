import React, { useState } from 'react';
import axios from 'axios';
import dateFormatter from 'iso-date-formatter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { TOKEN } from '../../../../config.js';
import Stars from './Stars.jsx';

function Review({ review }) {

  const isoDate = review.date;
  const date = dateFormatter(isoDate, { format: 'MMM d, yyyy', namedMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] });

  const [count, setCount] = useState(review.helpfulness)
  const [hasClicked, setHasClicked] = useState(false)

  const handleHelpfulOnClick = () => {
    const reviewId = review.review_id
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/reviews/${reviewId}/helpful`
    axios.put(url, {}, {
      headers: {
        Authorization: TOKEN
      }
    })
    setCount(prev => prev + 1);
    setHasClicked(true)
  }

  const response = <div>Response from seller: <p>{review.response}</p></div>
  const recommend = <div><FontAwesomeIcon icon={faCheck} /> I recommend this product</div>
  const helpfulNoLink = <div>Was this review helpful? Yes ({count})</div>
  const helpfulLink = <div>Was this review helpful? <a href="#0" onClick={handleHelpfulOnClick}>Yes</a> ({count})</div>

  return (
    <div className="review">
      <div className="review-title">
        <h3>{review.summary}</h3>
      </div>
      <div className="review-date">
        {date}
      </div>
      <div className="review-stars">
        <Stars avgRating={review.rating}/>
      </div>
      <div className="review-body">
        {review.body}
      </div>
      <div className="review-response">
        {review.response ? response : null}
      </div>
      <div className="review-recommend">
        {review.recommend ? recommend : null}
      </div>
      <div className="review-user">
        Username: {review.reviewer_name}
      </div>
      <div className="review-photos">
        { review.photos.map(photo => {
          return <div key={photo.id}>PHOTO URL{photo.url}</div>
        }) }
      </div>
      <div className="review-helpfulness">
        {hasClicked ? helpfulNoLink : helpfulLink}
      </div>
    </div>
  )

}

export default Review;