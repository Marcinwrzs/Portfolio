import { createContext, useState, ReactNode } from 'react';

const initialState = {
  isOpen: false,
  darkMode: false,
  changeMode: () => {},
  openCloseMenu: () => {},
  goPage: () => {},
}

interface GlobalContextTypes {
  isOpen: boolean,
  darkMode: boolean,
  changeMode: () => void,
  openCloseMenu: () => void,
  goPage: () => void,
}

interface ProviderProps {
  children: ReactNode;
}

export const GlobalContext = createContext<GlobalContextTypes>(initialState);

export const GlobalProvider = ({children}: ProviderProps) => {
  
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const changeMode = (): void => {
    setDarkMode(!darkMode);
    setIsOpen(false);
  };

  const openCloseMenu = (): void => {
    setIsOpen(!isOpen);
  }

  const goPage = (): void => {
    setIsOpen(false);
  }

  return (
    <GlobalContext.Provider
      value={{
        isOpen,
        darkMode,
        goPage,
        openCloseMenu,
        changeMode,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
