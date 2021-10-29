import React from 'react';
import Question from './Question.jsx';
import Answer from './Answer.jsx';

const QAItem = (props) => {
  return (
    <div>
      <Question />
      <Answer />
    </div>
  )
}

export default QAItem;