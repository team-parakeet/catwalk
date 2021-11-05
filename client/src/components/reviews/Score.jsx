import React from 'react';

function Score({ avgRating }) {
  const formattedScore = avgRating.toFixed(1)
  return (
    <div className="score">
      AVERAGE RATING: {formattedScore}
    </div>
  )
}

export default Score;