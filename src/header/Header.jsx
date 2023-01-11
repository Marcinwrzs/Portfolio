import React, {useContext} from 'react';
import {GlobalContext} from 'context/Globalstate';
import Navbar from './components/Navbar';
import Burger from './components/Burger';
import { Navigation, Container } from './Header.styled'

function Header() {
  const {isOpen, darkMode} = useContext(GlobalContext);

  return (
    <Navigation darkMode={darkMode}>
        <Container>
            <Navbar />
            <Burger />
        </Container>
    </Navigation>
  )
}

export default Header;