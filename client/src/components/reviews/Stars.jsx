import React from 'react';
import StarRatings from 'react-star-ratings';

function Stars({ rating }) {
  return (
    <div className="stars">
      <StarRatings
        rating={rating}
        starDimension="15px"
        starSpacing="0px"
      />
    </div>
  )
}

export default Stars;