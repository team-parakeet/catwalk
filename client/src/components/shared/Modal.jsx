import React, { useEffect, useRef } from 'react';
import { Overlay, ModalWindow, ModalHeader, ModalExit, Line, ModalSubmit, ModalFooter } from '../styles/reviews/ModalStyled.styled';

function Modal({ toggleModal = () => {}, headerText, handleSubmit = () => {}, children}) {

  const modalRef = useRef();
  const renders = useRef(0);

  useEffect(() => {
    const handleKeyDown = e => {
      e.preventDefault();
      (e.key === 'Escape') ? toggleModal() : null;
    }

    const handleOutsideClick = e => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        toggleModal();
      }
    }

    window.addEventListener('keydown', handleKeyDown, false);
    document.addEventListener('click', (e) => handleOutsideClick(e), false);
    return () => {
      window.removeEventListener('keydown', handleKeyDown, false);
      document.removeEventListener('click', handleOutsideClick, false);
    }
  }, [toggleModal]);



  // const handleOutsideClick = useCallback(() => toggleModal());

  const handleSubmitOnClick = () => {
    handleSubmit();
    toggleModal();
  }

  console.log('rendered ', renders.current++);

  return (
    <Overlay>
      <ModalWindow ref={modalRef}>
        <ModalHeader>
          <h3>{headerText || 'Insert Header Text Here'}</h3>
          <ModalExit onClick={() => toggleModal()}>&times;</ModalExit>
        </ModalHeader>
        <Line />
        {children}
        <ModalFooter>
          <ModalSubmit type="submit" onClick={() => handleSubmitOnClick()}>
            Submit
          </ModalSubmit>
        </ModalFooter>
      </ModalWindow>
    </Overlay>
  )
}

export default Modal;