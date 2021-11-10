import React, { useContext } from 'react';
import Modal from '../shared/Modal.jsx';
import { QAContext } from './QAContext.jsx';
import {
  InputContainer,
  LabelStyled,
  InputStyled,
  QuestionInput,
  UsernameInput,
  EmailInput
} from '../styles/QA/AddQuestionModal.styled';

const AddQuestionModal = () => {
  const { toggleModal } = useContext(QAContext);

  const handleSubmit = () => {};

  return (
    <Modal toggleModal={toggleModal} headerText={"What's your question?"}>
      <InputContainer>
        <LabelStyled htmlFor="question-input">Question</LabelStyled>
        <QuestionInput
          id="question-input"
          type="text"
          name="question"
          placeholder="Enter your question..."
        />
      </InputContainer>
      <InputContainer>
        <LabelStyled htmlFor="username-input">Username</LabelStyled>
        <UsernameInput
          id="username-input"
          type="text"
          name="username"
          placeholder="Enter your username..."
        />
      </InputContainer>
      <InputContainer>
        <LabelStyled htmlFor="email-input">Email</LabelStyled>
        <EmailInput
          id="email-input"
          type="email"
          name="email"
          placeholder="john@smith.com"
        />
      </InputContainer>
    </Modal>
  );
};

export default AddQuestionModal;
