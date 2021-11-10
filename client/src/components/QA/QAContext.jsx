import React from 'react';

/**
 * State object
 * @type {{search: string}}
 */
const initialState = {
  search: '',
  product_id: 39334,
  showModal: false
};

/**
 * Actions object
 * @type {{ACTION: string}}
 */
const actions = {
  SET_SEARCH: 'SET_SEARCH',
  SET_PRODUCT_ID: 'SET_PRODUCT_ID',
  TOGGLE_MODAL: 'TOGGLE_MODAL'
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_SEARCH:
      return { ...state, search: action.payload };
    case actions.TOGGLE_MODAL:
      return {...state, showModal: !state.showModal };
    case actions.SET_PRODUCT_ID:
      return {...state, product_id: action.payload };
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
    product_id: state.product_id,
    showModal: state.showModal,
    setProductId: (value) => dispatch({type: actions.SET_PRODUCT_ID, payload: value}),
    setSearch: (e) => dispatch({type: actions.SET_SEARCH, payload: e.target.value}),
    toggleModal: () => dispatch({type: actions.TOGGLE_MODAL})
  }

  return <QAContext.Provider value={value}>{children}</QAContext.Provider>;
}