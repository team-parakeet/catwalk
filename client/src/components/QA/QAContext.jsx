import React from 'react';

/**
 * State object
 * @type {{search: string}}
 */
const initialState = {
  search: '',
  showModal: false
};

/**
 * Actions object
 * @type {{ACTION: string}}
 */
const actions = {
  SET_SEARCH: 'SET_SEARCH',
  TOGGLE_MODAL: 'TOGGLE_MODAL'
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_SEARCH:
      return { ...state, search: action.payload };
    case actions.TOGGLE_MODAL:
      return {...state, showModal: !state.showModal };
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
    showModal: state.showModal,
    setSearch: (e) => dispatch({type: actions.SET_SEARCH, payload: e.target.value}),
    toggleModal: () => dispatch({type: actions.TOGGLE_MODAL})
  }

  return <QAContext.Provider value={value}>{children}</QAContext.Provider>;
}