import React, { useState, useEffect, useReducer, useContext } from 'react';
import Search from './Search.jsx';
import QuestionsList from './QuestionsList.jsx';
import { getAllQuestions } from '../../request.js';
import { Provider } from './QAContext.jsx';

const QASection = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getAllQuestions(39333)
      .then(results => {
        console.log(
          '🚀 ~ file: QASection.jsx ~ line 12 ~ useEffect ~ results.data',
          results.data.results
        );
        setQuestions(results.data.results); // Already sorted by Question Helpfulness
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      {/* we want it to have font color #525252 */}
      {/* Putting in a span tag so that childrens listed on the context is just the span as opposed to Question, Answers, &*/}
      <span>QUESTIONS {'&'} ANSWERS</span>
      <Search />
      <QuestionsList questions={questions} />
    </>
  );
};

export default QASection;