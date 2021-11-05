import React, {useState, useEffect} from 'react';
import Slider from './Slider.jsx';

function StarsChart({ ratings }) {

  const stars = [5, 4, 3, 2, 1];

  return (
    <div className="stars-chart">
      {stars.map(star => {
        return (
        <div key={star} className="star-bar">
          {star} stars:
          <Slider id={star} value={ratings[star]}/>
          {ratings[star]}
        </div>
      )})}
    </div>
  )
}

export default StarsChart;