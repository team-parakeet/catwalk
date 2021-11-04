import React from 'react';

const initialState = {
  images: [],
  currentImage: 0,
}

const actions = {
  NEXT_PIC: 'NEXT_PIC',
  PREV_PIC: 'PREV_PIC',
  SET_CURRENT_IMAGE: 'SELECT_PIC',
  SET_IMAGES: 'SET_IMAGES'
}

function reducer(state = initialState, {type, payload = null}) {
  switch (type) {
    case actions.NEXT_PIC:
      return {...state, currentImage: state.currentImage + 1};
    case actions.PREV_PIC:
      return {...state, currentImage: state.currentImage - 1};
    case actions.SET_CURRENT_IMAGE:
      return {...state, currentImage: payload};
    case actions.SET_IMAGES:
      return {...state, images: payload};
    default:
      return state;
  }
}

export const OverviewContext = React.createContext();

export function OverviewProvider({children}) {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const value = {
    images: state.images,
    currentImage: state.currentImage,
    displayNextImage: () => dispatch({type: actions.NEXT_PIC}),
    displayPrevImage: () => dispatch({type: actions.PREV_PIC}),
    setCurrentImage: (value) => dispatch({type: actions.SET_CURRENT_IMAGE, payload: value}),
    setImages: (value) => dispatch({type: actions.SET_IMAGES, payload: value})
  }

  return <OverviewContext.Provider value={value}>{children}</OverviewContext.Provider>
}