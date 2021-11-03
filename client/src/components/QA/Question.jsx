import React from 'react';
import Helpful from './Helpful.jsx';
import { StyledDiv, QContainer, HelpfulContainer } from '../styles/QA/Question.styled';

const Question = (props) => {
  return (
    <QContainer className="q-container">
      <StyledDiv className={props.className}>
        Q: {props.question.question_body}
      </StyledDiv>
      <HelpfulContainer>
        <Helpful count={props.question.question_helpfulness} />
      </HelpfulContainer>
    </QContainer>
  )
}

export default Question;