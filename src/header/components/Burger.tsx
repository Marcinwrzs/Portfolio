import React, {useContext} from 'react';
import {GlobalContext} from 'context/Globalstate';
import { StyledBurger } from './Burger.styled'

const Burger: React.FC = () => {

  const {openCloseMenu, isOpen} = useContext(GlobalContext);

  return (
    <StyledBurger isOpen={isOpen} onClick={openCloseMenu}>
      {Array.from({ length: 3 }, (_, index) => <div key={index} />)}
    </StyledBurger>
  )
}

export default Burger;