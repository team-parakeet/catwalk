import React from 'react';
import {StyledDiv} from '../styles/QA/Question.styled';

const Question = (props) => {
  return (
    <StyledDiv>
      Q: {props.question.question_body}
    </StyledDiv>
  )
}

export default Question;