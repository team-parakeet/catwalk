import React from 'react';

function Slider({ id, value }) {

  return (
      <input
      className="slider"
      id={id}
      type="range"
      min="0"
      max="5"
      value={value}
      readOnly={true}
    />
  );
}

 export default Slider;