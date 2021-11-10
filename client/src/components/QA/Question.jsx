import React, { useContext } from 'react';
import { QAContext } from './QAContext.jsx';
import Helpful from './Helpful.jsx';
import { Spacer } from '../styles/QA/Spacer.styled';
import AddAnswerBtn from '../styles/QA/AddAnswerBtn.styled';
import Modal from '../shared/Modal.jsx';
import {
  StyledDiv,
  QuestionContainer,
  HelpfulContainer,
} from '../styles/QA/Question.styled';

const Question = props => {
  const { showModal, toggleModal } = useContext(QAContext);

  return (
    <QuestionContainer className="q-container">
      <StyledDiv className={props.className}>
        Q: {props.question.question_body}
      </StyledDiv>
      <HelpfulContainer>
        <Helpful count={props.question.question_helpfulness} /> |
        <AddAnswerBtn onClick={() => toggleModal()}>Add answer</AddAnswerBtn>
      </HelpfulContainer>
    </QuestionContainer>
  );
};

export default Question;
