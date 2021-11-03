import React, {useState, useEffect} from 'react';

function StarsChart({ ratings }) {
  //once we get stars
  // get the keys

  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="stars-chart">
      {stars.map(star => {
        return <div key={star} className="star-bar">{star} STARS: {ratings[star]}</div>
      })}
    </div>
  )
}

export default StarsChart;