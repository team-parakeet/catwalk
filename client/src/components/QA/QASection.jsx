import React, { useState, useEffect, useReducer, useContext } from 'react';
import Search from './Search.jsx';
import QuestionsList from './QuestionsList.jsx';
import { getAllQuestions } from '../../request.js';
import { QAContext } from './QAContext.jsx';

const QASection = () => {
  const [questions, setQuestions] = useState([]); // keep track of the questions
  const [searchResults, setSearchResults] = useState([]); // keep track of searchResults
  const {search} = useContext(QAContext);

  useEffect(() => {
    getAllQuestions(39333)
      .then(results => {
        setQuestions(results.data.results); // Already sorted by Question Helpfulness
      })
      .catch(err => console.error('There was an error retrieving questions for product >>>', err));
  }, []);

  useEffect(() => {
    if (search.length >= 3) {
      getSearchResults();
    } else {
      clearSearchResults(); // Clear the searchResults if we don't want to search
    }
  }, [search])

  const getSearchResults = () => {
    let results = [];
    for (let q of questions) {
      if (q.question_body.indexOf(search) > -1) {
        results.push(q);
        continue;
      }

      for (let ansKey in q.answers) {
        if (q.answers[ansKey].body.indexOf(search) > -1) {
          results.push(q);
          break;
        }
      }
    }

    setSearchResults(results);
  }

  const clearSearchResults = () => {
    setSearchResults([]);
  }

  return (
    <>
      {/* we want it to have font color #525252 */}
      {/* Putting in a span tag so that childrens listed on the context is just the span as opposed to Question, Answers, &*/}
      <span>QUESTIONS {'&'} ANSWERS</span>
      <Search />
      <QuestionsList questions={questions} searchResults={searchResults}/>
    </>
  );
};

export default QASection;