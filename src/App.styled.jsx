import styled from 'styled-components';

export const Wrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  min-height: -webkit-fill-available;
  background-color: ${({ darkMode }) => darkMode ? 'var(--background-night)' : 'var(--background-day)'} ;
  color: ${({ darkMode }) => darkMode ? 'var(--font-color-night)' : 'var(--font-color-day)'} ;
  padding-bottom: 25px;
  
  h1, h3 {
    color: ${({ darkMode }) => darkMode ? 'var(--font-color-night)' : 'var(--font-color-day)'};
    position: relative;
    width: fit-content;
  }

  svg {
    color: ${({ darkMode }) => darkMode ? 'var(--font-color-night)' : 'var(--font-color-day)'};
  }

  h1::after {
    content: '';
    position: absolute;
    bottom: 20%;
    background-color: #e88e9d;
    height: 5px;
    width: 100%;
    z-index: -1;
    left: 0;
  }

  p {
    font-size: 20px;
  }
`;