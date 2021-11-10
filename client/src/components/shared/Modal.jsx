import React, { useEffect, useRef } from 'react';
import { Overlay, ModalWindow, ModalHeader, ModalExit, Line, ModalSubmit, ModalFooter } from '../styles/reviews/ModalStyled.styled';

function ModalForm({ toggleModal = () => {}, headerText, handleSubmit = () => {}, children}) {

  const modalRef = useRef();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        e.preventDefault(); // must call prevent default here otherwise other key downs will be captured by this handler.
        toggleModal();
      }
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

  const handleSubmitOnClick = (e) => {
    e.preventDefault();
    handleSubmit(e);
    toggleModal();
  }

  return (
    <Overlay>
      <ModalWindow ref={modalRef}>
        <ModalHeader>
          <h3>{headerText || 'Insert Header Text Here'}</h3>
          <ModalExit tabIndex="0" onClick={() => toggleModal()}>&times;</ModalExit>
        </ModalHeader>
        <Line />
        <form onSubmit={handleSubmitOnClick}>
          {children}
          <ModalFooter>
            <ModalSubmit type="submit" onClick={(e) => handleSubmitOnClick(e)}>
              Submit
            </ModalSubmit>
          </ModalFooter>
        </form>
      </ModalWindow>
    </Overlay>
  )
}

export default ModalForm;