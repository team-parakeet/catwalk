import React, { useState } from 'react';
import QAItem from './QAItem.jsx';

const QuestionsList = ({ questions, searchResults }) => {
  const [loadFactor, setLoadFactor] = useState(4);
  let responses = (searchResults.length) ? searchResults : questions;
  let moreResponses = responses.length - loadFactor;
  let renderResults = (searchResults.length) || 0;

  return (
    <div>
      {responses.map((q, idx) =>
        idx < loadFactor ? <QAItem key={q.question_id} id={q.question_id} question={q} /> : null
      )}
      {moreResponses > 0 &&  <button onClick={() => setLoadFactor(loadFactor + 2)}>
            Load more answered questions ({moreResponses})
          </button>}
      {loadFactor > 4 && <button onClick={() => setLoadFactor(4)}>Collapse all questions</button>}
    </div>
  );
};

export default QuestionsList;
