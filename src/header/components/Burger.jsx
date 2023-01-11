import React, {useContext} from 'react';
import {GlobalContext} from 'context/Globalstate';
import { StyledBurger } from './Burger.styled'

const Burger = () => {

  const {openCloseMenu, isOpen} = useContext(GlobalContext);

  return (
      <StyledBurger isOpen={isOpen} onClick={openCloseMenu}>
        <div></div>
        <div></div>        
        <div></div>
      </StyledBurger>
  )
}

export default Burger;