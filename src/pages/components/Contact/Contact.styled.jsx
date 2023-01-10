import styled from 'styled-components';

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  div:nth-child(4) {
    margin-top: 50px;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 5px 0 0;
  font-size: 15px;
  text-decoration: none;
  color:inherit;

  &:visited {
    text-decoration: none;
    color:inherit;
  }

  svg {
    margin-right: 5px;
  }

  svg:hover, h2:hover {
    color: gray;
  }
`;
