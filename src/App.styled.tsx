import styled from 'styled-components';

interface WrapProps {
  darkMode: boolean;
}

export const Wrap = styled.div<WrapProps>`
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
  
  input, textarea {
    color: ${({ darkMode }) => darkMode ? 'var(--font-color-night)' : 'var(--font-color-day)'} ;
  }
  
  h1, h3 {
    color: ${({ darkMode }) => darkMode ? 'var(--font-color-night)' : 'var(--font-color-day)'};
    width: fit-content;
  }

  svg {
    color: ${({ darkMode }) => darkMode ? 'var(--font-color-night)' : 'var(--font-color-day)'};
  }


  p {
    font-size: 20px;
  }
`;