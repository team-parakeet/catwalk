import React from 'react';
import StarRatings from 'react-star-ratings';

function Stars({ avgRating }) {
  return (
    <div className="stars">
      <StarRatings
        rating={avgRating}
        starDimension="15px"
        starSpacing="0px"
      />
    </div>
  )
}

export default Stars;