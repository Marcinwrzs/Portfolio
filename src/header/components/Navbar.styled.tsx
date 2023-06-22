import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

interface CategoriesProps {
  isOpen: boolean;
}

export const ModeButton = styled.button`
  cursor: pointer;
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: rgba(0,0,0,0);
  font-size: 20px;
  margin: 0 10px;


  &:hover {
    svg {
      color: gray;
    }
  }

  @media (max-width: 800px) {
    margin-top: 40px;
  }
`

export const StyledLink = styled(NavLink)`
  padding: 0 10px;

  &.active {
    h3 {
      color: var(--border-color);
    }
  }

  &:hover {
    h3 {
      color: var(--hover-color);
    }
  }

  @media (max-width: 800px) {
    padding-top: 40px;
  }
`

export const Categories = styled.div<CategoriesProps>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  .resume { 
    &:hover {
      h3 {
        color: gray;
      }
    }

    @media (max-width: 800px) {
      padding-top: 40px;
    }
  }

  @media (max-width: 800px) {
    flex-flow: column nowrap;
    align-items: flex-start;
    background-color: var(--navigation-color);
    position: absolute;
    top: -80px;
    right: 0;
    height: calc(100%);
    overflow-x: hidden;
    min-height: 420px;
    z-index: 1;
    width: 100%;
    margin-top: 80px;
    padding: 100px 20px;
    max-width: 100%;
    left: ${({ isOpen }) => isOpen ? '0%' : '100%'};
    transition: left .5s;
    display: flex;
    align-items: center;
  }
`;