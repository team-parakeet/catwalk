import React from 'react';

const initialState = {
  images: [],
  currentImage: 0,
}

const actions = {
  NEXT_PIC: 'NEXT_PIC',
  PREV_PIC: 'PREV_PIC',
  SET_CURRENT_IMAGE: 'SELECT_PIC',
  SET_IMAGES: 'SET_IMAGES',
  HANDLE_KEY_PRESS: 'HANDLE_KEY_PRESS'
}

function reducer(state = initialState, {type, payload = null}) {
  switch (type) {
    case actions.NEXT_PIC:
      // It needs to be a complete copy of the state object.
      return {...state, currentImage: state.currentImage + 1};
    case actions.PREV_PIC:
      return {...state, currentImage: state.currentImage - 1};
    case actions.SET_CURRENT_IMAGE:
      return {...state, currentImage: payload};
    case actions.SET_IMAGES:
      return {...state, images: payload};
    // case actions.HANDLE_KEY_PRESS:

    default:
      return state;
  }
}



export const OverviewContext = React.createContext();

export function OverviewProvider({children}) {

  const [state, dispatch] = React.useReducer(reducer, initialState)

  const handleKeyPress = (e) => {
    if ((e.key === 'ArrowRight' /*|| e.key === 'ArrowDown'*/) && state.currentImage < state.images.length - 1) {
      event.preventDefault();
      dispatch({type: actions.NEXT_PIC})
    }
    else if ((e.key === 'ArrowLeft' /*|| e.key === 'ArrowUp'*/) && state.currentImage > 0) {
      event.preventDefault();
      dispatch({type: actions.PREV_PIC})
    }
  }

  const value = {
    images: state.images,
    currentImage: state.currentImage,
    displayNextImage: () => dispatch({type: actions.NEXT_PIC}),
    displayPrevImage: () => dispatch({type: actions.PREV_PIC}),
    setCurrentImage: (value) => dispatch({type: actions.SET_CURRENT_IMAGE, payload: value}),
    setImages: (value) => dispatch({type: actions.SET_IMAGES, payload: value}),
    handleKeyPress
  }

  return <OverviewContext.Provider value={value}>{children}</OverviewContext.Provider>
}