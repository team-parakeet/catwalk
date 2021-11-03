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
    getAllQuestions(39334)
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
      let text = q.question_body.substring();
      let copy = JSON.parse(JSON.stringify(q));
      let wasModified = false;
      if (text.toLowerCase().indexOf(search.toLowerCase()) > -1) {
        text = getHighlightedText(text, search);
        copy.question_body = text;
        wasModified = true;
      }

      for (let ansKey in q.answers) {
        text = q.answers[ansKey].body;
        if (text.toLowerCase().indexOf(search.toLowerCase()) > -1) {
          text = getHighlightedText(text, search);
          copy.answers[ansKey].body = text;
          wasModified = true;
        }
      }

      if (wasModified) results.push(copy);
    }

    setSearchResults(results);
  }

  const clearSearchResults = () => {
    setSearchResults([]);
  }

  function getHighlightedText(text, highlight) {
    // Split text on highlight term, include term itself into parts, ignore case
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return <span>{parts.map((part, idx) => part.toLowerCase() === highlight.toLowerCase() ? <span key={idx} style={{backgroundColor: 'yellow'}}>{part}</span> : part)}</span>;
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