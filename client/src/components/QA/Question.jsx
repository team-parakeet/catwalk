import React from 'react';
import Helpful from './Helpful.jsx';
import { Spacer } from '../styles/QA/Spacer.styled';
import AddAnswerBtn from '../styles/QA/AddAnswerBtn.styled';
import {
  StyledDiv,
  QuestionContainer,
  HelpfulContainer,
} from '../styles/QA/Question.styled';

const Question = props => {
  return (
    <QuestionContainer className="q-container">
      <StyledDiv className={props.className}>
        Q: {props.question.question_body}
      </StyledDiv>
      <HelpfulContainer>
        <Helpful count={props.question.question_helpfulness} /> |
        <AddAnswerBtn>Add answer</AddAnswerBtn>
      </HelpfulContainer>
    </QuestionContainer>
  );
};

export default Question;
