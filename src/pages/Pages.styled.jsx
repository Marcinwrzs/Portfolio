import styled from 'styled-components';

export const PagesCountainer = styled.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
  height: ${({ isOpen }) => isOpen ? 'calc(100% - 80px)' : ''};
  overflow-y: ${({ isOpen }) => isOpen ? 'hidden' : ''};
  min-height: calc(100% - 80px);

  @media (max-width: 800px) {
    filter: ${({ isOpen }) => isOpen ? 'blur(8px)' : ''};
    padding: 10px 0;
  }
`;