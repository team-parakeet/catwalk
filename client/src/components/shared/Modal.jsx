import React, { useEffect, useRef } from 'react';
import { Overlay, ModalWindow, ModalHeader, ModalExit, Line, ModalSubmit, ModalFooter } from '../styles/shared/ModalStyled.styled.js';

function ModalForm({ submitInModal = true, toggleModal = () => {}, headerText = '', handleSubmit = () => {}, children }) {

  const modalRef = useRef();

  useEffect(() => {
    const handleKeyDown = (e) => {
      (e.key === 'Escape') ? toggleModal() : null;
    }

    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
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

  const handleSubmitOnClick = () => {
    handleSubmit();
    toggleModal();
  }

  return (
    <Overlay>
      <ModalWindow ref={modalRef}>
        <ModalHeader>
          { headerText && <h3>{headerText || 'Insert Header Text Here'}</h3> }
          <ModalExit onClick={() => toggleModal()}>&times;</ModalExit>
        </ModalHeader>
        <Line />
        { children }
        {submitInModal &&
        <ModalFooter>
          <ModalSubmit type="submit" onClick={() => handleSubmitOnClick()}>
            Submit
          </ModalSubmit>
        </ModalFooter>
        }
      </ModalWindow>
    </Overlay>
  )
}

export default ModalForm;