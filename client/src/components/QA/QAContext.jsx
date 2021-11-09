import React from 'react';

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
export function Provider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const value = {
    search: state.search,
    setSearch: (e) => dispatch({type: actions.SET_SEARCH, payload: e.target.value})
  }

  return <QAContext.Provider value={value}>{children}</QAContext.Provider>;
}