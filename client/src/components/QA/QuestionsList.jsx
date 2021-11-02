import React from 'react';
import QAItem from './QAItem.jsx';

const QuestionsList = ({questions}) => {
  return (
    <div>
      { questions.map(q => {
        return <QAItem question={q}/>;
      })}
    </div>
  )
};

export default QuestionsList;