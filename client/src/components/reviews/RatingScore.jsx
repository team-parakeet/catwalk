import React from 'react';
import Score from './Score.jsx';
import Stars from './Stars.jsx';

function RatingScore(props) {
  return (
    <div className="rating-score-container">
      <Score avgRating={props.avgRating}/>
      <Stars />
    </div>
  )
}

export default RatingScore;