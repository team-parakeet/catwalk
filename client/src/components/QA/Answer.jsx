import React from 'react';
import {
  ResponsesContainer,
  AnswersContainer,
  SingleResponseContainer,
  ABlock,
  AnswerBody,
} from '../styles/QA/Answer.styled';
import { Spacer } from '../styles/QA/Spacer.styled';
import Helpful from './Helpful.jsx';
import Report from './Report.jsx';

const formatString = (dateString) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const Answer = ({ answers }) => {
  const keys = Object.keys(answers);
  return (
    <AnswersContainer>
      {keys.length > 0 && <ABlock>A:</ABlock>}
      {keys.length > 0 &&
        <ResponsesContainer>
          {Object.keys(answers).map(answer => {
            return (
              <SingleResponseContainer key={answer}>
                <AnswerBody>{answers[answer].body}</AnswerBody>
                <By answer={answers[answer]} />
                <Spacer>|</Spacer>
                <Helpful />
                <Spacer>|</Spacer>
                <Report />
              </SingleResponseContainer>
            );
          })}
        </ResponsesContainer>}
    </AnswersContainer>
  );
};

const By = ({ answer }) => {
  return (
    <span>
      by {answer.answerer_name}, {formatString(answer.date)}{' '}
    </span>
  );
};


export default Answer;
