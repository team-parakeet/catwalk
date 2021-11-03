import React, { useState, useEffect, useReducer, useContext } from 'react';
import Search from './Search.jsx';
import QuestionsList from './QuestionsList.jsx';
import { getAllQuestions } from '../../request.js';

/**
 * State object
 * @type {{search: string}}
 */
const initialState = {
  search: '',
};

/**
 * Actions object
 * @type {{ACTION: string}}
 */
const actions = {
  SET_SEARCH: 'SET_SEARCH',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_SEARCH:
      return { ...state, search: action.payload };
    default:
      return state;
  }
}

// Create the context
export const QAContext = React.createContext();

// Create a context provider that gives children access to the context
function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    search: state.search,
    setSearch: (e) => dispatch({type: actions.SET_SEARCH, payload: e.target.value})
  }

  return <QAContext.Provider value={value}>{children}</QAContext.Provider>;
}

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
    <Provider>
      {/* we want it to have font color #525252 */}
      {/* Putting in a span tag so that childrens listed on the context is just the span as opposed to Question, Answers, &*/}
      <span>QUESTIONS {'&'} ANSWERS</span>
      <Search />
      <QuestionsList questions={questions} />
      {/* <Random /> */}
    </Provider>
  );
};

const Random = () => {
  const {search, setSearch} = useContext(QAContext);

  return (<div>{search}</div>)
}

export default QASection;
