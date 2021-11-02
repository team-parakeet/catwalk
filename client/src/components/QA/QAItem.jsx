import React from 'react';
import Question from './Question.jsx';
import Answer from './Answer.jsx';

// TODO: figure out what to display when there are no answers
const QAItem = (props) => {
  return (
    <div>
      <Question question={props.question}/>
      <Answer answers={props.question.answers}/>
    </div>
  )
}

export default QAItem;