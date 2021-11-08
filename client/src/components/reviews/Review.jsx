import React, { useState } from 'react';
import { putReviewAsHelpful } from '../../request.js';
import dateFormatter from 'iso-date-formatter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Stars from './Stars.jsx';
import {
  ReviewContainer, ReviewTitle, ReviewDate, ReviewStars, ReviewBody, ReviewResponse, ReviewResponseBody, ReviewRecommend, ReviewUser, ReviewHelpfulness, ReviewPhotos, HelpfulLink
} from '../styles/reviews/ReviewStyled.styled.js';

function Review({ review }) {

  const isoDate = review.date;
  const date = dateFormatter(isoDate, { format: 'MMM d, yyyy', namedMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] });

  const [count, setCount] = useState(review.helpfulness)
  const [hasClicked, setHasClicked] = useState(false)

  const handleHelpfulOnClick = () => {
    const reviewId = review.review_id
    putReviewAsHelpful(reviewId);
    setCount(prev => prev + 1);
    setHasClicked(true)
  }

  const response = <ReviewResponse>Response from seller: <ReviewResponseBody>{review.response}</ReviewResponseBody></ReviewResponse>
  const recommend = <ReviewRecommend><FontAwesomeIcon icon={faCheck} /> I recommend this product</ReviewRecommend>
  const helpfulNoLink = <ReviewHelpfulness>Was this review helpful? Yes ({count})</ReviewHelpfulness>
  const helpfulLink = <ReviewHelpfulness>Was this review helpful? <HelpfulLink href="#0" onClick={handleHelpfulOnClick}>Yes</HelpfulLink> ({count})</ReviewHelpfulness>

  return (
    <ReviewContainer>
      <ReviewDate>
        {date}
      </ReviewDate>
      <ReviewUser>
        {review.reviewer_name}
      </ReviewUser>
      <ReviewStars>
        <Stars avgRating={review.rating}/>
      </ReviewStars>
      <ReviewTitle>
        {review.summary}
      </ReviewTitle>
      <ReviewBody>
        {review.body}
      </ReviewBody>
      {review.response ? response : null}
      {review.recommend ? recommend : null}
      <ReviewPhotos>
        { review.photos.map(photo => {
          return <div key={photo.id}>Photo url: {photo.url}</div>
        }) }
      </ReviewPhotos>
      {hasClicked ? helpfulNoLink : helpfulLink}
    </ReviewContainer>
  )

}

export default Review;