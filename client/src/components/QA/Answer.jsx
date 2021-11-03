import React, { useState } from 'react';
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
  const [loadFactor, setLoadFactor] = useState(2);
  let moreAnswers = keys.length - loadFactor;

  return (
    <AnswersContainer>
      {keys.length > 0 && <ABlock>A:</ABlock>}
      {keys.length > 0 &&
        <ResponsesContainer>
          {keys.map((answer, idx) => { // 'answer' is the id of the answer
            return (idx < loadFactor) ? (
              <SingleResponseContainer key={answer} id={answer}>
                <AnswerBody>{answers[answer].body}</AnswerBody>
                <By answer={answers[answer]} />
                <Spacer>|</Spacer>
                <Helpful />
                <Spacer>|</Spacer>
                <Report />
              </SingleResponseContainer>
            ) : null;
          })}
          {moreAnswers > 0 &&  <button onClick={() => setLoadFactor(loadFactor + 2)}>
            Load more answers ({moreAnswers})
          </button>}
          {loadFactor > 2 && <button onClick={() => setLoadFactor(2)}>Collapse all answers</button>}
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
