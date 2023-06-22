import React, {useContext} from 'react';
import {GlobalContext} from 'context/Globalstate';
import { BsMoon , BsSun} from 'react-icons/bs';
import CV from 'CV.pdf';
import { ModeButton, StyledLink, Categories } from './Navbar.styled';

interface NavigationLinksType {
  id: number;
  title: string;
  path: string;
}

const Navbar: React.FC = () => {

  const {isOpen, goPage, changeMode, darkMode} = useContext(GlobalContext);

  const navigationLinks: NavigationLinksType[] = [
    {id: 1, title: 'About', path: '/'},
    {id: 2, title: 'Work Experience', path: '/experience'},
    {id: 3, title: 'Projects', path: '/projects'},
    {id: 4, title: 'Contact', path: '/contact'},
  ] 

  return (
    <Categories isOpen={isOpen}>
      {navigationLinks.map((item) => {
        const { id, title, path } = item;
        return (
          <StyledLink key={id} to={path} onClick={goPage}>
            <h3>{title}</h3>
          </StyledLink>
        );
      })}

      <a href={CV} target="_blank" rel="noreferrer" className="resume" onClick={goPage}>
        <h3>Resume</h3>
      </a>

      <ModeButton onClick={changeMode}>
        {darkMode ? <BsSun /> : <BsMoon />}
      </ModeButton>
    </Categories>
  )
};

export default Navbar;