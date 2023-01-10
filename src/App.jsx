import React, {useContext} from 'react';
import {GlobalContext} from './context/Globalstate';
import {BrowserRouter} from 'react-router-dom';
import Header from 'header/Header';
import Pages from 'pages/Pages';
import { Wrap } from './App.styled';

const App = () => {
  const {isOpen, darkMode} = useContext(GlobalContext);
  
  return (
      <BrowserRouter>
        <Wrap darkMode={darkMode}>
            <Header />
            <Pages />
        </Wrap>
      </BrowserRouter>
  );
}

export default App;