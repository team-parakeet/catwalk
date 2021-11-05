import React from 'react';

function Button({ handleOnClick, text }) {

  return (
    <button className="button" onClick={handleOnClick}>{text}</button>
  )
}

export default Button;