import React from 'react';
import Search from './Search.jsx';
import QuestionsList from './QuestionsList.jsx';
import { getAllQuestions } from '../../request.js';

const QASection = () => {
  getAllQuestions(39333)
    .then(results => console.log(results.data));

  return (
    <div>
      {/* we want it to have font color #525252 */ }
      QUESTIONS {"&"} ANSWERS
      <Search />
      <QuestionsList />
    </div>
  )
}

export default QASection;