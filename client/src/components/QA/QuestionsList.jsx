import React, { useState } from 'react';
import QAItem from './QAItem.jsx';

const QuestionsList = ({ questions, searchResults }) => {
  const [loadFactor, setLoadFactor] = useState(4);
  let responses = (searchResults.length) ? searchResults : questions;
  let moreResponses = responses.length - loadFactor;
  let isSearching = (searchResults.length) || false;

  return (
    <div className='questions-list'>
      {responses.map((q, idx) =>
        idx < loadFactor ? <QAItem key={q.question_id} id={q.question_id} question={q} className={"qa-item"} /> : null
      )}
      {moreResponses > 0 &&  <button onClick={() => setLoadFactor(loadFactor + 2)} className="load-questions">
            Load more answered questions ({moreResponses})
          </button>}
      {loadFactor > 4 && <button onClick={() => setLoadFactor(4)} className="collapse-questions">Collapse all questions</button>}
    </div>
  );
};

export default QuestionsList;
