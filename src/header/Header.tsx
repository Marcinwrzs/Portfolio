import React from 'react';
import Navbar from './components/Navbar';
import Burger from './components/Burger';
import { Navigation, Container } from './Header.styled';

const Header: React.FC = () => {
  return (
    <Navigation>
      <Container>
        <Navbar />
        <Burger />
      </Container>
    </Navigation>
  );
};

export default Header;