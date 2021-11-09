import React, { useEffect } from 'react';
import { Overlay, ModalStyled } from '../styles/reviews/ModalStyled.styled';

function Modal({ toggleModal, handleSubmit, children}) {

  useEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = originalOverflow);
  }, []);

  const handleSubmitOnClick = () => {
    handleSubmit();
    toggleModal();
  }

  return (
    <Overlay>
      <ModalStyled>
        {children}
      </ModalStyled>
    </Overlay>
  )
}

export default Modal;