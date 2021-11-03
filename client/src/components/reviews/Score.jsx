import React from 'react';

function Score({ avgRating }) {
  return (
    <div className="score">
      AVERAGE RATING: {avgRating}
    </div>
  )
}

export default Score;