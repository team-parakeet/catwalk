import React, { useState, useEffect } from 'react';
import Search from './Search.jsx';
import QuestionsList from './QuestionsList.jsx';
import { getAllQuestions } from '../../request.js';

const QASection = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getAllQuestions(39333)
      .then(results => {
        setQuestions(results.data.results); // Already sorted by Question Helpfulness
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {/* we want it to have font color #525252 */}
      QUESTIONS {'&'} ANSWERS
      <Search />
      <QuestionsList questions={questions}/>
    </div>
  );
};

export default QASection;
