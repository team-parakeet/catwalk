import React, { useState, useEffect } from 'react';
import SelectStars from './SelectStars.jsx';
import { Overlay, ModalStyled } from '../styles/reviews/ModalStyled.styled';


function Modal({ toggleModal }) {

  useEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = originalOverflow);
  }, []);

  return (
    <Overlay>
        <ModalStyled>
          Write Your Review
          <form>
            <label>Overall Rating:
              <SelectStars />
            </label>
            <button>Submit</button>
            <button onClick={toggleModal}>Close</button>
          </form>
      </ModalStyled>
    </Overlay>
  )
}

export default Modal;