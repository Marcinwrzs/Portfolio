import { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  isOpen: false,
  darkMode: false,
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const changeMode = (darkMode) => {
    dispatch({type: "CHANGE_MODE", payload: darkMode});
  }

  const openCloseMenu = (isOpen) => {
    dispatch({type: "OPEN_CLOSE_MENU", payload: isOpen});
  }

  const goPage = (isOpen) => {
    dispatch({type: "GO_PAGE", payload: isOpen});
  }

  return (
    <GlobalContext.Provider value={{
      isOpen: state.isOpen,
      darkMode: state.darkMode,
      openCloseMenu,
      goPage,
      changeMode
      }}>
      {props.children}
    </GlobalContext.Provider>
  )
};