import React, {useContext} from 'react';
import {GlobalContext} from 'context/Globalstate';
import { BsMoon , BsSun} from 'react-icons/bs';
import CV from 'CV.pdf';
import { ModeButton, StyledLink, Categories } from './Navbar.styled';

const Navbar = () => {

  const {isOpen, goPage, changeMode, darkMode} = useContext(GlobalContext);

  const navitationLinks = [
    {id: 1, title: 'About', path: '/'},
    {id: 2, title: 'Work Experience', path: '/experience'},
    {id: 3, title: 'Projects', path: '/projects'},
    {id: 4, title: 'Contact', path: '/contact'},
  ] 
  return (
    <Categories isOpen={isOpen} >
    
      
      {navitationLinks.map((item) => {
        const {id, title, path} = item;
        return (
          <StyledLink key={id} to={path} onClick={goPage} >
            <h3>{title}</h3>
          </StyledLink>
        )
      })}



      <a href={CV} target="_blank" rel="noreferrer" className='resume' onClick={goPage}>
        <h3>Resume</h3>
      </a>

      <ModeButton onClick={changeMode}>
        
        {darkMode ? <BsSun/> :  <BsMoon/>}
      </ModeButton>

    </Categories>
  )
};

export default Navbar;