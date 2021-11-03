import React, { useState } from 'react';
import QAItem from './QAItem.jsx';

const QuestionsList = ({ questions }) => {
  const [loadFactor, setLoadFactor] = useState(4);
  let moreQuestions = questions.length - loadFactor;

  return (
    <div>
      {questions.map((q, idx) =>
        idx < loadFactor ? <QAItem key={q.question_id} id={q.question_id} question={q} /> : null
      )}
      {moreQuestions > 0 &&  <button onClick={() => setLoadFactor(loadFactor + 2)}>
            Load more answered questions ({moreQuestions})
          </button>}
      {loadFactor > 4 && <button onClick={() => setLoadFactor(4)}>Collapse all questions</button>}
    </div>
  );
};

export default QuestionsList;
