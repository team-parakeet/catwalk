import React from 'react';

function Slider({ id, value }) {

  return (
    <input
      id={id}
      type="range"
      min="0"
      max="5"
      value={value}
    />
  );

}

 export default Slider;