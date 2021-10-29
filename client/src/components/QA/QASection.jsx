import React from 'react';
import Search from './Search.jsx';
import QuestionsList from './QuestionsList.jsx';

const QASection = () => {
  return (
    <div>
      {/* we wnat it to have font color #525252 */ }
      QUESTIONS {"&"} ANSWERS
      <Search />
      <QuestionsList />
    </div>
  )
}

export default QASection;