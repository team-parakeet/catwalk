import React from 'react';
import Modal from '../shared/Modal.jsx';
import { QAContext } from './QAContext.jsx';

const AddQuestionModal = () => {
  const { toggleModal } = useContext(QAContext);
  return (
    <Modal toggleModal={toggleModal} headerText={'What\'s your question?'}>

    </Modal>
  )
}

export default AddQuestionModal;