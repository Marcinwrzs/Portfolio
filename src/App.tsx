import {useContext} from 'react';
import {GlobalContext} from './context/Globalstate';
import { HashRouter as Router} from 'react-router-dom';
/* import { BrowserRouter as Router } from 'react-router-dom'; */
import Header from 'header/Header';
import Pages from 'pages/Pages';
import { Wrap } from './App.styled';

const App: React.FC = () => {
  const {darkMode} = useContext(GlobalContext);
  
  return (
      <Router>
        <Wrap darkMode={darkMode}>
            <Header />
            <Pages />
        </Wrap>
      </Router>
  );
}

export default App; 


