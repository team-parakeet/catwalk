import React, {useState, useEffect} from 'react';

function StarsChart({ reviews }) {
  //once we get stars
  // get the keys

  const [ratings, setRatings] = useState([1, 2, 3, 4, 5])

  return (
    <div className="stars-chart">
      {ratings.map(rating => {
        return <div key={rating} className="star-bar">{rating} STARS: </div>
      })}
    </div>
  )
}

export default StarsChart;