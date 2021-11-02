import React from 'react';

function Score(props) {
  return (
    <div className="score">
      AVERAGE RATING: {props.avgRating}
    </div>
  )
}

export default Score;